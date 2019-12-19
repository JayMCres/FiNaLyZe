require("dotenv").config();

// console.log(process.env);

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
const routes = require("./routes");

app.use("/", routes);

// app.get("*", (req, res) => res.status(200).send("Welcome to the homepage."));

const port = process.env.PORT || 5000;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));
const apiBaseUrl = process.env.FMP_BASE_URL;
const realTimePrices = process.env.FMP_REALTIME_PRICES;

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
  const url = realTimePrices;
  let response = await fetch(url);
  // console.log("response", response);

  let json = await response.json();
  // console.log("json", json);

  const stocks = await json;
  socket.emit("FromAPI", stocks);
};
