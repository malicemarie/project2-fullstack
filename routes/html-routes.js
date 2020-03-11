"use strict";

module.exports = app => {
  app.get(`/`, (req, res) => {
    res.render("index", { template: "index" });
  });

  app.get(`/recipes`, (req, res) => {
    res.render("viewall", { template: "viewall" });
  });
};
