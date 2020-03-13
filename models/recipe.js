"use strict";

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(`Recipe`, {
    title: DataTypes.STRING,
    ingredientname: DataTypes.STRING,
    category: DataTypes.STRING,
    servingsize: DataTypes.INTEGER
  });
};
