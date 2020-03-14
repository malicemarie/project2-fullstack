"use strict";

// Handlebars.registerHelper("splitIngredients", function(
//   ingredientname,
//   options
// ) {
//   const ingredientsAsHtml = ingredientname.map(
//     ingredient => "<li>" + options.fn(ingredient) + "</li>"
//   );
//   return "<ul>\n" + ingredientsAsHtml.join("\n") + "\n</ul>";
// });

function sanitizeRecipes(recipes) {
  let sanitizedRecipes = [];
  recipes.forEach(recipe => {
    sanitizedRecipes.push({
      title: recipe.title,
      ingredientname: recipe.ingredients,
      category: recipe.category,
      servingsize: recipe.servingsize
    });
  });
  return sanitizedRecipes;
}

module.exports = {
  sanitizeRecipes
};
