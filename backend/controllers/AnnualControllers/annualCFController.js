const fetch = require("node-fetch");

exports.getAnnualCashFlow = async (req, res) => {
  const url = `https://financialmodelingprep.com/api/financials/cash-flow-statement/${req.body.post}?datatype=json`;

  let response = await fetch(url);
  // console.log("response", response);

  // // // only proceed once promise is resolved
  let json = await response.json();
  // console.log("json", json);

  let cashFlowData = await Object.values(json);

  let originalCFObj = await cashFlowData.map(item => {
    const values = Object.values(item);
    const labels = Object.keys(item);

    return { label: labels, value: values };
  });

  let restatedCFObj = await originalCFObj.map(item => {
    const labels = Object.values(item.label);

    const newValues = Object.values(item.value);

    const cfItems = newValues.map((item, index) => {
      const cf = Object.values(item);

      return {
        label: labels[index],
        YrOne: parseInt(cf[0]),
        YrTwo: parseInt(cf[1]),
        YrThree: parseInt(cf[2]),
        YrFour: parseInt(cf[3]),
        YrFive: parseInt(cf[4])
      };
    });

    return cfItems;
  });

  res.send(restatedCFObj);
};
