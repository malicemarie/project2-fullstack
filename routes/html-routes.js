"use strict";

module.exports = app => {
  app.get(`/`, (req, res) => {
    res.render("index", { layout: "index" });
  });

  app.get(`/api/recipes`, (req, res) => {
    res.render("viewall", { layout: "viewall" });
  });
};
