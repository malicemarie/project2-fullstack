"use strict";

module.exports = app => {
  app.get(`/`, (req, res) => {
    // the default layout is already set to "main" in server.js
    // we can omit that option
    res.render("index");
  });

  app.get(`/recipes`, (req, res) => {
    // including dummy data so it renders something
    res.render("viewall", { recipes: [{ title: 'pizza', ingredientname: 'cheese', category: 'food' }] });
  });
};
