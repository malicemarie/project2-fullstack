"use strict";

module.exports = app => {
  app.get(`/`, (req, res) => {
    res.render("index", { layout: "main", template: "index" });
  });

  app.get(`/api/recipes`, (req, res) => {
    res.render("viewall", { layout: "main", template: "viewall" });
  });
};
