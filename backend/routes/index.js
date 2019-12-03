const routes = require("express").Router();

const usersController = require("../controllers/usersController");
const stockTickerController = require("../controllers/CompanyControllers/stockTickerController");
const newsArticleController = require("../controllers/newsArticleController");
const marketIndexController = require("../controllers/marketIndexController");
const companyController = require("../controllers/CompanyControllers/companyController");
const companyRatioController = require("../controllers/CompanyControllers/companyRatioController");
const valueMetricsController = require("../controllers/CompanyControllers/valueMetricsController");
const companyProfileController = require("../controllers/CompanyControllers/companyProfileController");

const valuationModelController = require("../controllers/CompanyControllers/valuationModelController");
const favoriteController = require("../controllers/favoriteController");
const noteController = require("../controllers/noteController");

const annualBSController = require("../controllers/AnnualControllers/annualBSController");
const annualCFController = require("../controllers/AnnualControllers/annualCFController");
const annualISController = require("../controllers/AnnualControllers/annualISController");
const summaryFinancialsController = require("../controllers/AnnualControllers/summaryFinancialsController");

const quaterlyBSController = require("../controllers/QuaterlyControllers/quaterlyBSController");
const quaterlyCFController = require("../controllers/QuaterlyControllers/quaterlyCFController");
const quaterlyISController = require("../controllers/QuaterlyControllers/quaterlyISController");

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
routes.patch("/api/edit_note/:id", noteController.editNote);
routes.delete("/api/delete_note/:id", noteController.deleteNote);

routes.use("/api/annualbs", annualBSController.getAnnualBalanceSheet);
routes.use("/api/annualcf", annualCFController.getAnnualCashFlow);
routes.use("/api/annualincome", annualISController.getAnnualIncome);

routes.use("/api/quaterlybs", quaterlyBSController.getQuaterlyBSData);
routes.use("/api/quaterlycf", quaterlyCFController.getQuaterlyCFData);
routes.use("/api/quaterlyis", quaterlyISController.getQuaterlyISData);
routes.use("/api/historicals", valuationModelController.getModelHistoricalData);
routes.use(
  "/api/summaryfinancials",
  summaryFinancialsController.getSummaryFinancials
);

module.exports = routes;
