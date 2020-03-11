class ViewAll {
  constructor(title, ingredients, category, servingsize) {
    if (typeof title !== "string" || !title.trim().length, typeof category !== "string" || !category.trim().length) {
      throw new Error(
        "Expected parameter 'title', 'category' to be a non-empty string"
      );
    };
    if 
         (!Array.isArray(ingredients)) {
        
        throw new Error("Expected parameter 'ingredients' to be an non-empty array");
         };

    if 
      (isNaN(servingsize) ||
      servingsize <= 0
    ) {
      throw new Error(
        "Expected parameter 'servingsize' to be a non-negative number"
      );
    };
    this.title = title;
    this.ingredients = ingredients;
    this.category = category;
    this.servingsize = servingsize;
  };
};

module.exports = ViewAll;
