"use strict";

const db = require("../models");
module.exports = app => {
  app.get(`/`, (req, res) => {
    res.render("index");
  });

  app.get(`/viewall`, async (req, res) => {
    let allRecipes = await db.Recipe.findAll({});
    console.log("********************");
    console.log(allRecipes);
    console.log("********************");
    res.render("viewall", {
      allRecipes
    });
  });
};
