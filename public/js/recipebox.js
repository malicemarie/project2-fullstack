"use strict";

$(document).ready(() => {
  //create/add new recipe
  const titleInput = $("#title");
  const ingredientsInput = $("#ingredients");
  const categorySelect = $("#category");
  const submitBtn = $("#submit-btn");

  $(submitBtn).on("submit", handleFormSubmit);
  console.log("button click");

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
  console.log(newRecipe);

  submitRecipe(newRecipe);

  function submitRecipe() {
    $.ajax({
      method: "POST",
      url: "/api/recipes"
    }).then(() => {
      console.log("recipe Submitted successfully!");
      window.location.href = `/viewall`;
    });
  }

  //View all Recipes

  const viewAllBtn = $("#viewall-btn");

  $(viewAllBtn).on("submit", viewAllRecipes);

  console.log("button click");

  function viewAllRecipes(event) {
    event.preventDefault();
    $.ajax({
      method: "GET",
      url: "/recipes"
    }).then(() => {
      console.log("view all recipes success");
      window.location.href = "/";
    });
  }
});
