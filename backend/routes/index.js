const routes = require("express").Router();

const stockTickerController = require("../controllers/stockTickerController");
const newsArticleController = require("../controllers/newsArticleController");
const marketIndexController = require("../controllers/marketIndexController");
const companyController = require("../controllers/companyController");
const companyRatioController = require("../controllers/companyRatioController");
const valueMetricsController = require("../controllers/valueMetricsController");

routes.use("/api/news", newsArticleController.getNewsArticles);
routes.use("/api/company", companyController.getClickedCompany);
routes.use("/api/ratios", companyRatioController.getFinancialRatios);
routes.use("/api/valuation", valueMetricsController.getValueMetrics);
routes.use("/api/tickers", stockTickerController.getStockTickers);
routes.use("/api/indexes", marketIndexController.getMarketIndexes);

module.exports = routes;
