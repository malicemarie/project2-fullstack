"use strict";

const db = require(`../models`);

module.exports = app => {
  // GET route for getting all of the recipes
  app.get(`/viewall`, async (req, res) => {
    let allRecipes = await db.recipe.findAll({});
    let newRecipes = [];
    allRecipes.forEach(recipe => {
      newRecipes.push({
        title: recipe.title,
        ingredientname: recipe.ingredients,
        category: recipe.category
      });
    });
    res.render("viewall", {
      recipe: newRecipes
    });
  });

  // POST route for saving a new recipe
  app.post(`/api/recipes`, (req, res) => {
    db.recipe
      .create({
        title: req.body.title,
        ingredientname: req.body.ingredients,
        category: req.body.category,
        servingsize: req.body.servingsize
      })

      .then(dbrecipe => {
        console.log("added new recipe" + dbrecipe);
        res.json(dbrecipe);
      })
      .catch(err => {
        console.log("oops nope db error");
        res.json(err);
      });
  });

  //GET route for getting recipes by Category
  app.get(`/api/recipes/:category`, (req, res) => {
    db.recipe
      .findAll({
        where: {
          category: req.params.category
        }
      })
      .then(dbrecipe => {
        res.json(dbrecipe);
      });
  });

  // DELETE route for deleting recipes.
  app.delete(`/api/recipes/:id`, (req, res) => {
    db.recipe
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(dbrecipe => {
        res.json(dbrecipe);
      });
  });

  // PUT route for updating recipes.
  // app.put(`/api/recipes`, (req, res) => {
  //   db.recipe.update(
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
  //     .then(dbrecipe => {
  //       res.json(dbrecipe);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });
};
