const express = require("express");

const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const fetch = require("node-fetch");

// Set up the express app
const app = express();

app.use(logger("dev"));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// require("./routes")(app);

app.get("*", (req, res) => res.status(200).send("Welcome to the homepage."));

const port = process.env.PORT || 5000;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));

const io = require("socket.io").listen(server);
const connections = [];

io.sockets.on("connection", socket => {
  socket.once("diconnect", () => {
    connections.splice(connections.indexOf(socket), 1);
    socket.disconnect();
    console.log("disconnected: %s sockets remaining", connections.length);
  });
  connections.push(socket);
  console.log(
    "made socket connection: %s sockets connected",
    socket.id,
    connections.length
  );
  setInterval(() => getApiAndEmit(socket), 10000);
});

const getApiAndEmit = async socket => {
  const url = `https://financialmodelingprep.com/api/company/real-time-price/MSFT,AAPL,AMZN,GOOG,FB,JPM,JNJ,V,XOM,BAC,WMT,PG,MA,DIS,CSCO,VZ,INTC,UNH,T,CVX,HD,PFE,WFC,BA,KO,MRK,CMCSA,ORCL,PEP,C,NFLX,MCD,ADBE,NKE,ABT,PYPL,PM,CRM,HON,UNP,LLY,AVGO,IBM,ACN,ABBV,MDT,AMGN,MMM,TXN?datatype=json`;
  let response = await fetch(url);
  // console.log("response", response);

  let json = await response.json();
  // console.log("json", json);

  const stocks = await json;
  socket.emit("FromAPI", stocks);
};
