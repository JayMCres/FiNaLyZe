"use strict";
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define(
    "Favorite",
    {
      name: DataTypes.STRING,
      ticker: DataTypes.STRING,
      companyId: DataTypes.INTEGER
    },
    {}
  );
  Favorite.associate = function(models) {
    Favorite.belongsToMany(models.User, {
      through: "UserFavorite",
      as: "users",
      foreignKey: "favId"
    });
    // associations can be defined here
  };
  return Favorite;
};
