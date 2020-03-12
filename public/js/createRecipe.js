"use strict";

//create recipe function
$(document).ready(() => {
  const titleInput = $("#title");
  const ingredientsInput = $("#ingredients");
  const categorySelect = $("#category");
  const cmsForm = $("#cms");
  //const recipeCard = $(".card-body");

  $(cmsForm).on("submit", handleFormSubmit);
  let recipesId;

  function handleFormSubmit(event) {
    event.preventDefault();
    if (
      !titleInput.val().trim() ||
      !ingredientsInput.val().trim() ||
      !categorySelect.val()
    ) {
      return;
    }
  }
  const newRecipe = {
    title: titleInput.val().trim(),
    ingredients: ingredientsInput.val().trim(),
    category: categorySelect.val()
  };

  submitRecipe(newRecipe);

  function submitRecipe(recipe) {
    $.post(`/api/recipes`, recipe, () => {
      window.location.href = `/viewall`;
    });
  }
});
