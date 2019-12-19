const fetch = require("node-fetch");
const valuationMetrics = process.env.QUANDL_METRICS;
const baseUrl = process.env.QUANDL_BASE_URL;
const apiKey = process.env.QUANDL_API_KEY;

exports.getValueMetrics = async (req, res) => {
  const url = `${baseUrl}/${valuationMetrics}?ticker=${req.body.post}&api_key=${apiKey}`;

  let response = await fetch(url);

  let json = await response.json();

  const dataRes = await json.datatable.data.map((item, index) => {
    return {
      ticker: item[0],
      date: item[1],
      lastupdated: item[2],
      ev: item[3],
      evebit: item[4],
      evebitda: item[5],
      marketcap: item[6],
      pb: item[7],
      pe: item[8],
      ps: item[9]
    };
  });

  let valueMetricArray = await dataRes[0];
  // console.log("valueMetricArray", valueMetricArray);
  res.send(valueMetricArray);
};
