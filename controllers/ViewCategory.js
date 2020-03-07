class ViewCategory {
  constructor(title, ingredients, servingsize) {
    if (typeof title !== "string" || !title.trim().length) {
      throw new Error(
        "Expected parameter 'title', 'ingredients' to be a non-empty string"
      );
    }

    if (
      typeof servingsize !== "number" ||
      isNaN(servingsize) ||
      servingsize < 0
    ) {
      throw new Error(
        "Expected parameter 'servingsize' to be a non-negative number"
      );
    }
    this.title = title;
    this.ingredients = ingredients;
    this.servingsize = servingsize;
  }
}

module.exports = ViewCategory;
