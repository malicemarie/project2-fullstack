"use strict";

const db = require("../models");
module.exports = app => {
  app.get(`/`, (req, res) => {
    // the default layout is already set to "main" in server.js
    // we can omit that option
    res.render("index");
  });

  app.get(`/viewall`, async (req, res) => {
    let allRecipes = await db.recipe.findAll({});
    console.log("********************");
    console.log(allRecipes);
    console.log("********************");
    res.render("viewall", {
      recipe: allRecipes
      // recipes: [{ title: "pizza", ingredientname: "cheese", category: "food" }]
    });
  });
};
