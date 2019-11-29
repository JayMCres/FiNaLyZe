const fetch = require("node-fetch");

exports.getFinancialRatios = async (req, res) => {
  const url = `https://financialmodelingprep.com/api/financial-ratios/${req.body.post}?&datatype=json`;

  let response = await fetch(url);

  let json = await response.json();
  // console.log("json", json);

  let data = await [json.financialRatios];

  let ratioData = await data.map(ratio => {
    return Object.values(ratio);
  });
  // console.log("ratioData", ratioData);

  let reformatedData = await ratioData.map(item => {
    return Object.values(item[4]);
  });

  // console.log("refromated", reformatedData);

  const combinedRatio = await reformatedData.map(item => {
    return {
      ...item[0],
      ...item[1],
      ...item[2],
      ...item[3],
      ...item[4],
      ...item[5]
    };
  });
  console.log("combinedRatio", combinedRatio);

  res.send(combinedRatio);
};
