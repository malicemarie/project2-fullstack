'use strict';

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(`Recipe`, {
        title: DataTypes.STRING,
        amount: DataTypes.INTEGER,
        measurement: DataTypes.STRING,
        ingredientname: DataTypes.STRING,
        category: DataTypes.STRING,
        servingsize: DataTypes.INTEGER
    })
}