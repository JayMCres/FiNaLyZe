const fetch = require("node-fetch");
const annualBS = process.env.FMP_ANNUAL_BS;

exports.getAnnualBalanceSheet = async (req, res) => {
  const url = `${annualBS}/${req.body.post}?datatype=json`;

  let response = await fetch(url);
  // console.log("response", response);

  let json = await response.json();
  // console.log("json", json);

  let balanceSheetData = await Object.values(json);

  let originalBSObj = await balanceSheetData.map(item => {
    const values = Object.values(item);
    const labels = Object.keys(item);
    // console.log(labels);

    return { label: labels, value: values };
  });

  let restatedBSObj = await originalBSObj.map(item => {
    const labels = Object.values(item.label);

    const newValues = Object.values(item.value);

    const bsItems = newValues.map((item, index) => {
      const bs = Object.values(item);
      return {
        label: labels[index],
        YrOne: parseInt(bs[0]),
        YrTwo: parseInt(bs[1]),
        YrThree: parseInt(bs[2]),
        YrFour: parseInt(bs[3]),
        YrFive: parseInt(bs[4])
      };
    });
    // console.log("Bs items", bsItems);
    return bsItems;
  });

  res.send(restatedBSObj);
};
