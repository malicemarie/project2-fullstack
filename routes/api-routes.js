"use strict";

const db = require(`../models`);

module.exports = app => {
  // GET route for getting all of the recipes
  app.get(`/api/viewall`, (req, res) => {
    db.Recipe.findAll({}).then(dbRecipe => {
      res.json(dbRecipe);
    });
  });

  // POST route for saving a new recipe
  app.post(`/api/recipes`, (req, res) => {
    db.Recipe.create({
      title: req.body.title,
      ingredientname: req.body.ingredientname,
      category: req.body.category
    })

      .then(dbRecipe => {
        console.log("added new recipe" + dbRecipe);
        res.json(dbRecipe);
      })
      .catch(err => {
        console.log("oops nope db error");
        res.json(err);
      });
  });

  //GET route for getting recipes by Category
  app.get(`/api/recipes/:category`, (req, res) => {
    db.Recipe.findAll({
      where: {
        category: req.params.category
      }
    }).then(dbRecipe => {
      res.json(dbRecipe);
    });
  });

  // DELETE route for deleting recipes.
  app.delete(`/api/recipes/:id`, (req, res) => {
    db.Recipe.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbRecipe => {
      res.json(dbRecipe);
    });
  });

  // PUT route for updating recipes.
  // app.put(`/api/recipes`, (req, res) => {
  //   db.Recipe.update(
  //     {
  //       title: req.body.title,
  //       ingredientname: req.body.ingredientname,
  //       category: req.body.category,
  //       servingsize: req.body.servingsize
  //     },
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     }
  //   )
  //     .then(dbRecipe => {
  //       res.json(dbRecipe);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });
};
