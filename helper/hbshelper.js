"use strict";

Handlebars.registerHelper("splitIngredients", function(
  ingredientname,
  options
) {
  const ingredientsAsHtml = ingredientname.map(
    ingredient => "<li>" + options.fn(ingredient) + "</li>"
  );
  return "<ul>\n" + ingredientsAsHtml.join("\n") + "\n</ul>";
});
