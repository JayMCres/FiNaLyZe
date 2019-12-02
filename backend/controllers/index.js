const usersController = require("./usersController");
const stockTickerController = require("./CompanyControllers/stockTickerController");
const newsArticleController = require("./newsArticleController");
const marketIndexController = require("./marketIndexController");
const companyController = require("./CompanyControllers/companyController");
const companyRatioController = require("./CompanyControllers/companyRatioController");
const valueMetricsController = require("./CompanyControllers/valueMetricsController");
const valuationModelController = require("./CompanyControllers/ valuationModelController");
const companyProfileController = require("./CompanyControllers/companyProfileController");
const favoriteController = require("./favoriteController");
const noteController = require("./noteontroller");

const annualBSController = require("./AnnualControllers/annualBSController");
const annualCFController = require("./AnnualControllers/annualCFController");
const annualISController = require("./AnnualControllers/annualISController");
const summaryFinancialsController = require("./AnnualControllers/summaryFinancialsController");

const quaterlyBSController = require("./QuaterlyControllers/quaterlyBSController");
const quaterlyISController = require("./QuaterlyControllers/quaterlyISController");
const quaterlyCFController = require("./QuaterlyControllers/quaterlyCFController");

module.exports = {
  usersController,
  stockTickerController,
  newsArticleController,
  marketIndexController,
  companyController,
  companyRatioController,
  valueMetricsController,
  companyProfileController,
  favoriteController,
  noteController,
  annualBSController,
  annualCFController,
  annualISController,
  summaryFinancialsController,
  quaterlyBSController,
  quaterlyISController,
  quaterlyCFController,
  valuationModelController
};
