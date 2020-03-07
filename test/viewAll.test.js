"use strict";

const ViewAll = require("../controllers/ViewAll");

describe("ViewAll", () => {
  describe("Initialization", () => {
    it("should create an object with a title", () => {
      const viewAll = new ViewAll(
        "Toast",
        ["bread", "butter", "jam", "peanut butter"],
        "breakfast",
        4
      );

      expect(viewAll.title).toEqual("Toast");
    });

    it("should create an object with ingredients", () => {
      const viewAll = new ViewAll(
        "Toast",
        ["bread", "butter", "jam", "peanut butter"],
        "breakfast",
        4
      );

      expect(viewAll.ingredients).toEqual([
        "bread",
        "butter",
        "jam",
        "peanut butter"
      ]);
    });

    it("should create an object with a title, ingredients, category, and serving size if provided valid arguments", () => {
      const viewAll = new ViewAll(
        "Toast",
        ["bread", "butter", "jam", "peanut butter"],
        "breakfast",
        4
      );

      expect(viewAll.title).toEqual("Toast");
      expect(viewAll.ingredients).toEqual([
        "bread",
        "butter",
        "jam",
        "peanut butter"
      ]);
      expect(viewAll.category).toEqual("breakfast");
      expect(viewAll.servingsize).toEqual(4);
    });

    it("should create an object with a title, ingredients, category, and serving size if provided valid arguments", () => {
      const viewAll = new ViewAll(
        "Toast",
        ["bread", "butter", "jam", "peanut butter"],
        "breakfast",
        4
      );

      expect(viewAll.title).toEqual("Toast");
      expect(viewAll.ingredients).toEqual([
        "bread",
        "butter",
        "jam",
        "peanut butter"
      ]);
      expect(viewAll.category).toEqual("breakfast");
      expect(viewAll.servingsize).toEqual(4);
    });

    it("should throw an error if provided no arguments", () => {
      const callback = () => new ViewAll();

      expect(callback).toThrow();
    });

    //it("should throw an error");
    //ingredients
    //category
    //serving size
  });
});
