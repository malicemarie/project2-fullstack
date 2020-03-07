class ViewAll {
    constructor(title, ingredients, category, servingsize) {
        if (typeof title !== 'string' || !title.trim().length) {
            throw new Error("Expected parameter 'title' to be a non-empty string");
        }
        //(repeat for ingredients and category)
        if (typeof servingsize !== 'number' || isNaN(servingsize) || servingsize < 0) {
            throw new Error("Expected parameter 'servingsize' to be a non-negative number");
        }
        this.title = title;
        this.ingredients = ingredients;
        this.category = category;
        this.servingsize = servingsize;
    }
}

  module.exports = ViewAll;