"use strict";
const User = require("../models").User;
const Favorite = require("../models").Favorite;
const UserFavorite = require("../models").UserFavorite;

const handleResponse = res => {
  return data => {
    // console.log(data);
    res.send(data);
  };
};

const handleError = res => {
  return error => {
    // console.log(error);
    res.send(error);
  };
};

exports.addFavorite = (req, res) => {
  console.log("Body", req.body);
  console.log("Params", req.params);
  let newFav = {};

  Favorite.create({
    name: req.body.foundTicker.name,
    ticker: req.body.foundTicker.ticker,
    companyId: req.body.foundTicker.id
  })
    .then(fav => {
      newFav = fav;

      return UserFavorite.create({
        userId: req.body.userId,
        favId: newFav.id
      });
    })
    .then(() => {
      res.json(newFav);
    });
};

exports.deleteFavorite = (req, res) => {
  return UserFavorite.destroy({
    where: { favId: req.params.id }
  })
    .then(() => {
      Favorite.destroy({ where: { id: req.params.id } });
    })
    .then(handleResponse(res), handleError(res));
};

exports.getFavorite = (req, res) => {
  return Favorite.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: User,
        as: "users",
        required: true
      }
    ]
  }).then(handleResponse(res), handleError(res));
};
