"use strict";

$(document).ready(() => {
  //create/add new recipe
  const titleInput = $("#title");
  const ingredientsInput = $("#ingredients");
  const categorySelect = $("#category");
  const servingSize = $("#servingsize");
  const submitBtn = $("#submit-btn");

  submitBtn.on("click", handleFormSubmit);

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("button click");

    const newRecipe = {
      title: titleInput.val(),
      ingredients: ingredientsInput.val(),
      category: categorySelect.val(),
      servingsize: servingSize.val()
    };

    if (
      titleInput.val().trim() &&
      ingredientsInput.val().trim() &&
      categorySelect.val() &&
      servingSize.val()
    ) {
      console.log("submitting recipe");
      submitRecipe(newRecipe);
    } else {
      window.alert("please include all recipe elements!");
    }
  }

  function submitRecipe(newRecipe) {
    $.ajax({
      method: "POST",
      url: "/api/recipes",
      data: newRecipe
    }).then(() => {
      console.log("recipe Submitted successfully!");
      window.location.href = `/viewall`;
    });
  }

  //View all Recipes

  const viewAllBtn = $("#viewall-btn");

  viewAllBtn.on("submit", viewAllRecipes);

  function viewAllRecipes(event) {
    console.log("button click view all recipes");
    event.preventDefault();
    $.ajax({
      method: "GET",
      url: "/recipes"
    }).then(() => {
      console.log("view all recipes success");
      window.location.href = "/viewall";
    });
  }

  const addNewBtn = $("#addnew-btn");

  addNewBtn.on("click", goToIndex);

  function goToIndex(event) {
    event.preventDefault();
    window.location.href = "/";
  }
});
