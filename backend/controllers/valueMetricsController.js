const fetch = require("node-fetch");

exports.getValueMetrics = async (req, res) => {
  const url = `https://www.quandl.com/api/v3/datatables/SHARADAR/DAILY.json?ticker=${req.body.post}&api_key=YvjxT6NSByrGzvHcVJyS`;

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
  // console.log("response", newArray);
  res.send(valueMetricArray);
};

// module.exports = {
//   getMetrics
// };
