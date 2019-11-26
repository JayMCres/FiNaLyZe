const fetch = require("node-fetch");

exports.getMarketIndexes = async (req, res) => {
  const url = `https://financialmodelingprep.com//api/v3/majors-indexes`;

  let response = await fetch(url);
  // console.log("response", response);

  let json = await response.json();
  // console.log("json", json);

  let indexData = await [json];
  // console.log("response", newArray);
  // let data = await newArray[0];
  res.send(indexData);
};
