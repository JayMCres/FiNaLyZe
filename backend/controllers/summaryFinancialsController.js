const fetch = require("node-fetch");

exports.getSummaryFinancials = async (req, res) => {
  const date = "2018-12-31,2017-12-31,2016-12-31,2015-12-31,2014-12-31";

  const url = `https://www.quandl.com/api/v3/datatables/SHARADAR/SF1.json?dimension=MRY&qopts.columns=calendardate,revenue,ebitda,netinccmn,eps,ebit,ebitdamargin&ticker=${req.body.post}&calendardate=${date}&api_key=YvjxT6NSByrGzvHcVJyS`;
  const response = await fetch(url);

  const json = await response.json();
  // console.log("Json", json);

  const restatedFinancialsData = await json.datatable.data.map(
    (item, index) => {
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

  res.send(restatedFinancials);
};
