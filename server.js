"use strict";

const express = require(`express`);
const expressHandlebars = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3000;

const db = require(`./models`);

//Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Handlebars
app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static directory
app.use(express.static(`public`));

// Require routes file
require(`./routes/api-routes.js`)(app);
//require(`./routes/html-routes.js`)(app);

//start server via sequelize
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () =>
    console.log(`App listening on http://localhost:${PORT}`)
  );
});
