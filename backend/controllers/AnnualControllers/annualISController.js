const fetch = require("node-fetch");
const annualIS = process.env.FMP_ANNUAL_IS;

exports.getAnnualIncome = async (req, res) => {
  const url = `${annualIS}/${req.body.post}?datatype=json`;

  let response = await fetch(url);
  // console.log("response", response);

  // // // only proceed once promise is resolved
  let json = await response.json();
  // console.log("json", json);

  let incomeData = await Object.values(json);

  let originalISObj = await incomeData.map(item => {
    const values = Object.values(item);
    const labels = Object.keys(item);

    return { label: labels, value: values };
  });
  // console.log("originalISObj", originalISObj);

  let restatedISObj = await originalISObj.map(item => {
    // console.log("IS item", item);
    const labels = Object.values(item.label);

    const newValues = Object.values(item.value);

    const isItems = newValues.map((item, index) => {
      const is = Object.values(item);

      return {
        label: labels[index],
        YrOne: parseInt(is[0]),
        YrTwo: parseInt(is[1]),
        YrThree: parseInt(is[2]),
        YrFour: parseInt(is[3]),
        YrFive: parseInt(is[4])
      };
    });

    return isItems;
  });

  // console.log("restatedISObj", restatedISObj);
  res.send(restatedISObj);
};
