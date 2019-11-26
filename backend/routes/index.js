const routes = require("express").Router();

const stockTickerController = require("../controllers/stockTickerController");
const newsArticleController = require("../controllers/newsArticleController");
const marketIndexController = require("../controllers/marketIndexController");

routes.use("/api/news", newsArticleController.getNewsArticles);

routes.use("/api/tickers", stockTickerController.getStockTickers);
routes.use("/api/indexes", marketIndexController.getMarketIndexes);

module.exports = routes;
