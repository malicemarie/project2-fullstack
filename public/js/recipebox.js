"use strict";

$(document).ready(() => {
  //create/add new recipe
  const titleInput = $("#title");
  const ingredientsInput = $("#ingredients");
  const categorySelect = $("#category");
  const submitBtn = $("#submit-btn");

  $(submitBtn).on("click", handleFormSubmit);
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

  //updating recipe is not in our MVP but this if statement should come in handy later based on past activities
  if (updating) {
    newRecipe.id = recipeId;
    updateRecipe(newRecipe);
  } else {
    submitRecipe(newRecipe);
  }

  function submitRecipe() {
    $.ajax({
      method: "POST",
      url: "/api/recipes"
    }).then(() => {
      window.location.href = `/viewall`;
    });
  }
});
