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
const noteController = require("../controllers/noteController");

const annualBSController = require("../controllers/annualBSController");
const annualCFController = require("../controllers/annualCFController");
const annualISController = require("../controllers/annualIncomeController");
const summaryFinancialsController = require("../controllers/summaryFinancialsController");

const quaterlyBSController = require("../controllers/quaterlyBSController");
const quaterlyCFController = require("../controllers/quaterlyCFController");
const quaterlyISController = require("../controllers/quaterlyISController");

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

routes.get("/api/notes/:id", noteController.getNote);
routes.get("/api/notes", noteController.listNotes);
routes.post("/api/user_note", noteController.addNote);
routes.delete("/api/delete_note/:id", noteController.deleteNote);

routes.use("/api/annualbs", annualBSController.getAnnualBalanceSheet);
routes.use("/api/annualcf", annualCFController.getAnnualCashFlow);
routes.use("/api/annualincome", annualISController.getAnnualIncome);

routes.use("/api/quaterlybs", quaterlyBSController.getQuaterlyBSData);
routes.use("/api/quaterlycf", quaterlyCFController.getQuaterlyCFData);
routes.use("/api/quaterlyincome", quaterlyISController.getQuaterlyISData);

routes.use(
  "/api/summaryfinancials",
  summaryFinancialsController.getSummaryFinancials
);

module.exports = routes;
