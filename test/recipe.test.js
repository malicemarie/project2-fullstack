"use strict";

const Recipe = require("../test/CreateRecipe");

describe("CreateRecipe", () => {
  describe("Initialization", () => {
    it("should create an object with a title", () => {
      const recipe = new Recipe(
        "Toast",
        ["bread", "butter", "jam", "peanut butter"],
        "breakfast",
        4
      );

      expect(recipe.title).toEqual("Toast");
    });
    it("should create an object with ingredients", () => {
      const recipe = new Recipe(
        "Toast",
        ["bread", "butter", "jam", "peanut butter"],
        "breakfast",
        4
      );

      expect(recipe.ingredients).toEqual([
        "bread",
        "butter",
        "jam",
        "peanut butter"
      ]);
    });
    it("should create an object with a category", () => {
      const recipe = new Recipe(
        "Toast",
        ["bread", "butter", "jam", "peanut butter"],
        "breakfast",
        4
      );

      expect(recipe.category).toEqual("breakfast");
    });
    it("should create an object with a serving size", () => {
      const recipe = new Recipe(
        "Toast",
        ["bread", "butter", "jam", "peanut butter"],
        "breakfast",
        4
      );

      expect(recipe.servingsize).toEqual(4);
    });
  });
});
