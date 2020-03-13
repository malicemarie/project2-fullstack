"use strict";

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(`recipe`, {
    title: DataTypes.STRING,
    ingredientname: DataTypes.STRING,
    category: DataTypes.STRING,
    servingsize: DataTypes.INTEGER
  });
};
