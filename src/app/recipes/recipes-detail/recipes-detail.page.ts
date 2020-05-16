import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RecipesService } from "../recipes.service";
import { Recipes } from "../recipes.model";

@Component({
  selector: "app-recipes-detail",
  templateUrl: "./recipes-detail.page.html",
  styleUrls: ["./recipes-detail.page.scss"],
})
export class RecipesDetailPage implements OnInit {
  loadedRecipe: Recipes;

  constructor(
    private activatedroute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedroute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("recipeId")) {
        //redirect
        return;
      }

      const recipeId = paramMap.get("recipeId");
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    });
  }

  onDeleteRecipe() {
    this.recipesService.deleteRecipe(this.loadedRecipe.id);
    this.router.navigate(["/recipes"]);
  }
}
