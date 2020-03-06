"use strict";

const express = require(`express`);

const app = express();
const PORT = process.env.PORT || 3000;

const db = require(`./models`);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static(`public`));

require(`./routes/api-routes.js`)(app);
require(`./routes/html-routes.js`)(app);

db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () =>
    console.log(`App listening on http://localhost:${PORT}`)
  );
});
