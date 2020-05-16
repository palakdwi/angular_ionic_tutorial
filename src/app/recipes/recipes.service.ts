import { Injectable } from "@angular/core";
import { Recipes } from "./recipes.model";

@Injectable({
  providedIn: "root",
})
export class RecipesService {
  private recipes: Recipes[] = [
    {
      id: "r1",
      title: "maggi",
      imageUrl:
        "https://spoonsofflavor.com/wp-content/uploads/2019/09/Simple-Maggi-Masala-Noodles.jpg",
      ingredients: ["masala", "water"],
    },
    {
      id: "r2",
      title: "chai",
      imageUrl:
        "https://i2.wp.com/www.honeywhatscooking.com/wp-content/uploads/2019/04/Kadak-Masala-Chai-3.jpg?resize=780%2C1031",
      ingredients: ["tea leaves", "sugar", "ginger"],
    },
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find((recipe) => {
        return recipe.id === recipeId;
      }),
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });
  }
}
