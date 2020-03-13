"use strict";

//create/add new recipe
const titleInput = $("#title");
const ingredientsInput = $("#ingredients");
const categorySelect = $("#category");
const submitBtn = $("#submit-btn");

$(submitBtn).on("submit", handleFormSubmit);
let recipesId;
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
    console.log("recipe Submitted successfully!");
    window.location.href = `/viewall`;
  });
}

//View all Recipes

const viewAllBtn = $("#viewall-btn");

$(submitBtn).on("submit", viewAllRecipes);
let recipesId;
console.log("button click");

function viewAllRecipes(event) {
  event.preventDefault();
  $.ajax({
    method: "GET",
    url: "api/viewall"
  }).then(() => {
    console.log("view all recips success");
    window.location.href = "/viewall";
  });
}
