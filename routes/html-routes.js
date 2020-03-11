"use strict";

// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const path = require(`path`);

// Routes
// =============================================================
module.exports = app => {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get(`/`, (req, res) => {
    res.render("index", { layout: "index" });
  });

  app.get(`/api/recipes`, (req, res) => {
    res.render("viewall", { layout: "viewall" });
  });

  // blog route loads blog.html
};
