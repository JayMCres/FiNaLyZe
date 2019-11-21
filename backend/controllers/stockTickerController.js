const fetch = require("node-fetch");

exports.getStockTickers = async (req, res) => {
  // const col =
  //   "ticker,name,exchange,famaindustry,sector,industry,scalemarketcap,scalerevenue,location,secfilings,companysite,permaticker";
  // const url = `https://www.quandl.com/api/v3/datatables/SHARADAR/TICKERS.json?table=SF1&qopts.columns=${col}&api_key=YvjxT6NSByrGzvHcVJyS`;
  // const response = await fetch(url);
  // const json = await response.json();

  // console.log("JSON", json);

  // const dataResponse = await json.datatable.data.map((item, index) => {
  //   return {
  //     id: item[11],
  //     ticker: item[0],
  //     name: item[1],
  //     exchange: item[2],
  //     famaindustry: item[3],
  //     sector: item[4],
  //     industry: item[5],
  //     marketcap: item[6],
  //     revenue: item[7],
  //     location: item[8],
  //     filings: item[9],
  //     website: item[10]
  //   };
  // });

  // let reformattedData = await dataResponse.filter(obj => {
  //   return obj.marketcap === "6 - Mega";
  // });
  // let newTickerArray = await reformattedData;

  // res.send(newTickerArray);

  const companies = "AAPL,AMZN";
  const url =
    "https://financialmodelingprep.com/api/v3/company/profile/AAPL,AMZN";
  const response = await fetch(url);
  const json = await response.json();

  res.send(json);
  console.log("JSON", json);
};
