const fetch = require("node-fetch");

const baseUrl = process.env.QUANDL_BASE_URL;
const stockTickers = process.env.QUANDL_TICKERS_URL;
const col = process.env.QUANDL_COLUMNS;
const apiKey = process.env.QUANDL_API_KEY;

exports.getStockTickers = async (req, res) => {
  const url = `${baseUrl}/${stockTickers}&qopts.columns=${col}&api_key=${apiKey}`;

  const tickerResponse = await fetch(url);

  const tickerJson = await tickerResponse.json();
  // console.log("JSON", tickerJson);

  const tickerDataResponse = await tickerJson.datatable.data.map(
    (item, index) => {
      return {
        id: item[11],
        ticker: item[0],
        name: item[1],
        exchange: item[2],
        famaindustry: item[3],
        sector: item[4],
        industry: item[5],
        marketcap: item[6],
        revenue: item[7],
        location: item[8],
        filings: item[9],
        website: item[10]
      };
    }
  );

  // console.log("ticker Data Response", tickerDataResponse);

  let filteredTickers = await tickerDataResponse.filter(obj => {
    return obj.marketcap === "6 - Mega";
  });
  let reformatedTickers = await filteredTickers;

  res.send(reformatedTickers);
};
