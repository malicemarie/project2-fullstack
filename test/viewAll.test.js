"use strict";

const ViewAll = require("../viewAll");

describe("ViewAll", () => {
  describe("Initialization", () => {
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
    });
  });
});
