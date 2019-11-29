const routes = require("express").Router();

const usersController = require("../controllers/usersController");
const stockTickerController = require("../controllers/stockTickerController");
const newsArticleController = require("../controllers/newsArticleController");
const marketIndexController = require("../controllers/marketIndexController");
const companyController = require("../controllers/companyController");
const companyRatioController = require("../controllers/companyRatioController");
const valueMetricsController = require("../controllers/valueMetricsController");
const companyProfileController = require("../controllers/companyProfileController");
const favoriteController = require("../controllers/favoriteController");

routes.use("/api/users", usersController.listUsers);
routes.use("/api/users/:id", usersController.getUser);
routes.post("/api/signup", usersController.addUser);

routes.use("/api/news", newsArticleController.getNewsArticles);
routes.use("/api/company", companyController.getClickedCompany);
routes.use("/api/ratios", companyRatioController.getFinancialRatios);
routes.use("/api/valuation", valueMetricsController.getValueMetrics);
routes.use("/api/tickers", stockTickerController.getStockTickers);
routes.use("/api/indexes", marketIndexController.getMarketIndexes);
routes.use("/api/profile", companyProfileController.getCompanyProfile);
routes.use("/api/user_favorite", favoriteController.addFavorite);
routes.delete("/api/delete_favorite/:id", favoriteController.deleteFavorite);
routes.get("/api/user_favorite/:id", favoriteController.getFavorite);

module.exports = routes;
