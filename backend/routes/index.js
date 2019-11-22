var express = require("express");
var router = express.Router();

const stockTickerController = require("../controllers/stockTickerController");
const newsArticleController = require("../controllers/newsArticleController");

module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the Finalyze!"
    })
  );
};

router.use("/api/news", newsArticleController.getNewsArticles);

router.use("/api/tickers", stockTickerController.getStockTickers);
