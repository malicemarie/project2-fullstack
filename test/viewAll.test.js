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

    it("should create an object with a category", () => {
      const viewAll = new ViewAll(
        "Toast",
        ["bread", "butter", "jam", "peanut butter"],
        "breakfast",
        4
      );

      expect(viewAll.category).toEqual("breakfast");
    });

    it("should create an object with a serving size", () => {
      const viewAll = new ViewAll(
        "Toast",
        ["bread", "butter", "jam", "peanut butter"],
        "breakfast",
        4
      );

      expect(viewAll.servingsize).toEqual(4);
    });
  });
});
