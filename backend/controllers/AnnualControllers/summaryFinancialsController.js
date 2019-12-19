const fetch = require("node-fetch");
const date = process.env.QUANDL_DATES;
const quandlBaseUrl = process.env.QUANDL_BASE_URL;
const summaryFinancials = process.env.QUANDL_HISTORICAL;
const apiKey = process.env.QUANDL_API_KEY;

exports.getSummaryFinancials = async (req, res) => {
  const url = `${quandlBaseUrl}/${summaryFinancials}&ticker=${req.body.post}&calendardate=${date}&api_key=${apiKey}`;
  const response = await fetch(url);
  const json = await response.json();
  // console.log("Json", json);
  const restatedFinancialsData = await json.datatable.data.map(
    (item, index) => {
      // console.log("item", item);
      // return item;
      const date = item[0].slice(0, 4);
      const revenue = (item[1] / 1000000000).toLocaleString("us-EN", {
        style: "currency",
        currency: "USD"
      });
      const ebitda = (item[2] / 1000000000).toLocaleString("us-EN", {
        style: "currency",
        currency: "USD"
      });
      const ni = (item[3] / 1000000000).toLocaleString("us-EN", {
        style: "currency",
        currency: "USD"
      });
      const ebit = (item[5] / 1000000000).toLocaleString("us-EN", {
        style: "currency",
        currency: "USD"
      });
      const ebitdamargin = (item[2] / item[1]) * 100;
      const ebitmargin = (item[5] / item[1]) * 100;
      return {
        // ["year" + (index + 1)]:
        date: item[0],
        revenue: revenue,
        ebitda: ebitda,
        ebitdaMargin: ebitdamargin.toString().slice(0, 4),
        ebit: ebit,
        ebitMargin: ebitmargin.toString().slice(0, 4),
        ni: ni,
        eps: item[4]
      };
    }
  );
  //
  let restatedFinancials = await restatedFinancialsData;

  // console.log("restatedFinancials", newFin);
  res.send(restatedFinancials);
};
