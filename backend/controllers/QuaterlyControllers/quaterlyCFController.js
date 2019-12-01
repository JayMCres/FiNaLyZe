const fetch = require("node-fetch");

exports.getQuaterlyCFData = async (req, res) => {
  const url = `https://financialmodelingprep.com/api/financials/cash-flow-statement/${req.body.post}?period=quarter&datatype=json`;

  let response = await fetch(url);
  // console.log("response", response);

  let json = await response.json();
  // console.log("json", json);

  let data = await json.financials;
  // console.log("Data", data);

  let orderedData = await data.reverse();

  let cashFlow = await orderedData.map((item, index) => {
    const value = Object.values(item);
    return {
      "Release Date": value[0],
      // // EBITDA: number(value[3]) + number(value[2]) + number(value[1]),
      // "Depreciation & Amortization": value[1],
      // "Stock-based Compensation": value[2],
      "Operating Cash Flow": value[3],
      "Capital Expenditure": value[4],
      "Acquisitions and Disposals": value[5],
      "Investment Purchases and Sales": value[6],
      "Investing Cash Flow": value[7],
      "Issuance (Repayment) of Debt": value[8],
      "Issuance (Buybacks) of Shares": value[9],
      "Dividend Payments": value[10],
      "Financing Cash Flow": value[11],
      "F/X Impact": value[12],
      "Net Cash Flow": value[13],
      "Free Cash Flow": value[14],
      "Net Cash/Marketcap": value[15]
    };
  });
  res.send(cashFlow);
};
