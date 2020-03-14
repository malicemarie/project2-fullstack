"use strict";

const ViewCategory = require("../test/ViewCategory");

describe("ViewCategory", () => {
  describe("Initialization", () => {
    it("should create an object with a title", () => {
      const viewCategory = new ViewCategory(
        "Toast",
        ["bread", "butter", "jam", "peanut butter"],
        4
      );

      expect(viewCategory.title).toEqual("Toast");
    });

    it("should create an object with ingredients", () => {
      const viewCategory = new ViewCategory(
        "Toast",
        ["bread", "butter", "jam", "peanut butter"],
        4
      );

      expect(viewCategory.ingredients).toEqual([
        "bread",
        "butter",
        "jam",
        "peanut butter"
      ]);
    });

    it("should create an object with a serving size", () => {
      const viewCategory = new ViewCategory(
        "Toast",
        ["bread", "butter", "jam", "peanut butter"],
        4
      );

      expect(viewCategory.servingsize).toEqual(4);
    });
  });
});
