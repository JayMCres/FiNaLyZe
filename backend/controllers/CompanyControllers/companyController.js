const fetch = require("node-fetch");

const compProfile = process.env.FMP_PROFILE;
const annualIS = process.env.FMP_ANNUAL_IS;
const annualCF = process.env.FMP_ANNUAL_CF;

exports.getClickedCompany = async (req, res) => {
  const data = await Promise.all([
    fetch(`${compProfile}/${req.body.post}?datatype=json`).then(response =>
      response.json()
    ), // parse each response as json
    fetch(`${annualIS}/${req.body.post}?datatype=json`).then(response =>
      response.json()
    ),
    fetch(`${annualCF}/${req.body.post}?datatype=json`).then(response =>
      response.json()
    )
  ]);
  // console.log("data", data);

  const profileData = await Object.values(data[0]);

  const annualDataIS = await Object.values(data[1]);

  let originalISObj = await annualDataIS.map(item => {
    const values = Object.values(item);
    // console.log(values);
    const labels = Object.keys(item);
    return { label: labels, value: values };
  });

  let newISData = await originalISObj.map(item => {
    const labels = Object.values(item.label);
    const newValues = Object.values(item.value);
    // console.log(newValues);
    const isItems = newValues.map((item, index) => {
      const is = Object.values(item);
      return {
        label: labels[index],
        YrOne: parseInt(is[0]),
        YrTwo: parseInt(is[1]),
        YrThree: parseInt(is[2]),
        YrFour: parseInt(is[3]),
        YrFive: parseInt(is[4]),
        TTM: parseInt(is[5])
      };
    });
    return isItems;
  });

  const annualDataCF = await Object.values(data[2]);

  let originalCFObj = await annualDataCF.map(item => {
    const values = Object.values(item);
    const labels = Object.keys(item);
    return { label: labels, value: values };
  });

  let newCFData = await originalCFObj.map(item => {
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
        YrFive: parseInt(cf[4]),
        TTM: parseInt(cf[5])
      };
    });
    return cfItems;
  });

  const combinedIS = await profileData.concat(newISData);
  const combinedData = await combinedIS.concat(newCFData);

  // console.log("combinedData", combinedData);

  res.send(combinedData);
};
