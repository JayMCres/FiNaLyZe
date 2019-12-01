const fetch = require("node-fetch");

exports.getCompanyProfile = async (req, res) => {
  const url = `https://financialmodelingprep.com/api/company/profile/${req.body.post}?datatype=json`;

  let responseProfile = await fetch(url);

  const jsonData = await responseProfile.json();

  const profileData = await Object.values(jsonData);

  const companyProfile = await profileData[0];
  // console.log("Profile Data", companyProfile);

  res.send(companyProfile);
};
