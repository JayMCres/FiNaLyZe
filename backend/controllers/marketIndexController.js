const fetch = require("node-fetch");

const majorIndexes = process.env.FMP_INDEXES;

exports.getMarketIndexes = async (req, res) => {
  const url = `${majorIndexes}`;

  let response = await fetch(url);
  // console.log("response", response);

  let json = await response.json();
  // console.log("json", json);

  let jsonData = await [json];
  // console.log("response", jsonData);
  let indexDataJson = await jsonData[0];

  let indexData = Object.values(indexDataJson);

  let indexListData = indexData[0];

  // console.log(" indexData response", indexListData);
  res.send(indexListData);
};
