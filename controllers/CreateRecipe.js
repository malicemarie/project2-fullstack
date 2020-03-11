class CreateRecipe {
    constructor (title, ingredients, category, servingsize) {
        if (!title){
            throw new Error("Please enter a title for your recipe")
        } 
         
         if 
         (!Array.isArray(ingredients)) {
        
        throw new Error("Expected parameter 'ingredients' to be an non-empty array");
         }
        if (isNaN(servingsize) || servingsize <= 0)
        {
            throw new Error(
                "Expected parameter 'servingsize' to be a non-negative number"
            );
        }
        this.title = title;
        this.ingredients = ingredients;
        this.category = category;
        this.servingsize = servingsize;
    }

}

module.exports = CreateRecipe;