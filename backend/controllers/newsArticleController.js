const fetch = require("node-fetch");

exports.getNewsArticles = async (req, res) => {
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ff12d6130a334ddeaaa6e036dd47762e`;

  let response = await fetch(url);
  // console.log("News Response", response);

  let json = await response.json();
  // console.log("News JSON", json);

  // const articles = await newsJsonData.articles.map(article => {
  //   return article;
  // });
  // console.log("articles", articles);

  res.send(json);
};
