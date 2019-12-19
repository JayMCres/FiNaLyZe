const fetch = require("node-fetch");

const companyOverview = process.env.FMP_PROFILE;

exports.getCompanyProfile = async (req, res) => {
  const url = `${companyOverview}/${req.body.post}?datatype=json`;

  let responseProfile = await fetch(url);

  const jsonData = await responseProfile.json();

  const profileData = await Object.values(jsonData);

  const companyProfile = await profileData[0];
  // console.log("Profile Data", companyProfile);

  res.send(companyProfile);
};
