const db = require(`../models`);

module.exports = app => {
  app.get(`/api/recipes`, (req, res) => {
    const query = {};
    if (req.query.title) {
      query.Title = req.query.title;
    }
    db.Recipe.findAll({
      where: query,
      include: [db.Title]
    }).then(dbTitle);
  });
};
