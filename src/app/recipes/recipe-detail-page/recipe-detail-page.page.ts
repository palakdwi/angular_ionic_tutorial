import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail-page',
  templateUrl: './recipe-detail-page.page.html',
  styleUrls: ['./recipe-detail-page.page.scss'],
})
export class RecipeDetailPagePage implements OnInit {
  loadedRecipe: Recipe;
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService
  ) {}
  

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(resp => {
      console.log(resp);
    });
  }
}
