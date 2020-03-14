"use strict";

const db = require("../models");
const handlebarshelper = require("../helper/hbshelper");

module.exports = app => {
  app.get(`/`, (req, res) => {
    res.render("index");
  });

  app.get(`/viewall`, async (req, res) => {
    let allRecipes = await db.Recipe.findAll({});
    let santizedRecipes = handlebarshelper.sanitizeRecipes(allRecipes);

    res.render("viewall", {
      Recipe: santizedRecipes
    });
  });
};
