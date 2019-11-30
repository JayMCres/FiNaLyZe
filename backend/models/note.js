"use strict";
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define(
    "Note",
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      favId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      favName: DataTypes.STRING,
      favTicker: DataTypes.STRING
    },
    {}
  );
  Note.associate = function(models) {
    // associations can be defined here
    // Note.belongsTo(models.User);
  };
  return Note;
};
