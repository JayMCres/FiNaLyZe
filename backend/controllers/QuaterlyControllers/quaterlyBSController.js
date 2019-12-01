const fetch = require("node-fetch");

exports.getQuaterlyBSData = async (req, res) => {
  const url = `https://financialmodelingprep.com/api/financials/balance-sheet-statement/${req.body.post}?period=quarter&datatype=json`;

  let response = await fetch(url);
  // console.log("response", response);

  let json = await response.json();
  // console.log("json", json);

  let data = await json.financials;
  // console.log("Data", data);

  let orderedData = await data.reverse();

  let reformattedQuaterlyBS = await orderedData.map((item, index) => {
    // console.log("BS Item", item);
    const value = Object.values(item);
    return {
      "Release Date": value[0],
      "Cash and Cash Equivalents": value[1],
      "Short-term Investments": value[2],
      Receivables: value[4],
      Inventories: value[5],
      "Current Assets": value[6],
      "Property Plant & Equipment": value[7],
      "Goodwill and Intangible Assets": value[8],
      "Long-term Investments": value[9],
      "Tax assets": value[10],
      "Non-Current Assets": value[11],
      "Total Assets": value[12],
      Payables: value[13],
      "Current Debt": value[14],
      "Current Liabilities": value[15],
      "Non-Current Debt": value[16],
      "Deferred Revenue": value[18],
      "Tax Liabilities": value[19],
      "Deposit Liabilities": value[20],
      "Non-Current Liabilites": value[21],
      "Total Liabilities": value[22],
      "Other Comprehensive Income": value[23],
      "Retained Earnings (deficit)": value[24],
      "Shareholders Equity": value[25]
    };
  });

  res.send(reformattedQuaterlyBS);
};
