"use strict";

module.exports = app => {
  app.get(`/`, (req, res) => {
    res.render("index");
  });

  app.get(`/recipes`, (req, res) => {
    res.render("viewall", { recipes: [{ title: 'pizza', ingredientname: 'cheese', category: 'food' }] });
  });
};
