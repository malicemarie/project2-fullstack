describe(`jest test`, () => {
  it(`should pass`, () => {
    expect(1 + 2).toEqual(3);
  });

  it("should fail", () => {
    expect("1" + "1").toEqual(2);
  });
});

describe(viewAllRecipes, () => {
  it("should display all the recipes in the table", () => {
    expect().toBe();
  });
  it("should display all the recipes based on the user id", () => {
    expect().toBe();
  });
});

describe(viewRecipeByCategory, () => {
  it("should display all the recipes in a given category", () => {
    expect().toBe();
  });
  it("should not display recipes from other categories", () => {
    expect().toBe();
  });
  it("should display recipes based on user id & category", () => {
    expect().toBe();
  });
});
