const fetch = require("node-fetch");

exports.getQuaterlyISData = async (req, res) => {
  // const getData = async () => {
  // console.log("BODY", req.body.post);
  // console.log("params", req.params);

  // const ticker = await req.body;
  // console.log("ticker", ticker);

  const url = `https://financialmodelingprep.com/api/financials/income-statement/${req.body.post}?period=quarter&datatype=json`;

  let response = await fetch(url);
  // console.log("response", response);

  // // // only proceed once promise is resolved
  let json = await response.json();
  // console.log("json", json);

  let data = await json.financials;
  // console.log("Data", data);

  let orderedData = await data.reverse();

  let income = await orderedData.map((item, index) => {
    const value = Object.values(item);
    return {
      "Release Date": value[0],
      Revenue: value[1],
      "Cost of Revenue": value[3],
      "Gross Profit": value[4],
      "R&D Expenses": value[5],
      "SG&A Expense": value[6],
      "Operating Expenses": value[7],
      "Operating Income": value[8],
      EBITDA: value[27],
      "Interest Expense": value[9],
      "Pre-tax Income": value[10],
      "Income Tax Expense": value[11],
      "Net Income": value[14],
      "Preferred Dividends": value[15],
      "Net Income Common": value[16],
      EPS: value[17],
      "EPS Diluted": value[18],
      "Weighted Average Shs Out": value[19],
      "Weighted Average Shs Out (Dil)": value[20],
      "Dividend per Share": value[21],
      "Gross Margin": value[22],
      "EBIT Margin": value[23],
      "EBITDA Margin": value[24],
      "Net Margin": value[25]
    };
  });

  res.send(income);
};
