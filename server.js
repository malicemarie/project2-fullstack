"use strict";

const express = require(`express`);
const expressHandlebars = require("express-handlebars");
const compression = require("compression");

const app = express();
const PORT = process.env.PORT || 8000;

const db = require(`./models`);

//Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

//Compression
app.use(compression());

//Handlebars
app.engine(
  "handlebars",
  expressHandlebars({ defaultLayout: "main" }) // the default layouts is "views/layouts" so we can omit that option
);

app.set("view engine", "handlebars");

// Static directory
app.use(express.static(`public`));

// Require routes file
require(`./routes/api-routes.js`)(app);
require(`./routes/html-routes.js`)(app);

//start server via sequelize
db.sequelize.sync().then(() => {
  app.listen(PORT, () =>
    console.log(`App listening on http://localhost:${PORT}`)
  );
});
