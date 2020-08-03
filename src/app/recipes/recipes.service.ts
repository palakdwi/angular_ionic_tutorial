import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { HttpClient } from '@angular/common/http';
import { take, map, tap, delay, switchMap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

interface RecipeData{
  status: string,
  results: number,
  data: Recipe[]
}

@Injectable({
  providedIn: 'root'
})
export class RecipesService 
{
  private _recipes = new BehaviorSubject<Recipe[]>([]);


  constructor(private http: HttpClient, private recipesService:RecipesService) { }

  get recipes(){
    return this._recipes.asObservable();
  }

  fetchRecipes()
  {
    return this.http
    .get<{ [status:string]: RecipeData }>('http://palakdwivedi.com:5000/api/v1/recipes')
    .pipe(
      map(resdata => {
        console.log(resdata);
        const recipes=[];
      if(resdata.status.toString() === "success"){
          for(const i in resdata.data){
            recipes.push(
              new Recipe(
              resdata.data[i].activeStatus,
              resdata.data[i].category,
              resdata.data[i].createdAt,
              resdata.data[i].description,
              resdata.data[i].imageCover,
              resdata.data[i].images,
              resdata.data[i].ingredients,
              resdata.data[i].modifiedAt,
              resdata.data[i].name,
              resdata.data[i].prepTime,
              resdata.data[i].shared,
              resdata.data[i].id
            ));
          }
          return recipes;
         }
      }),
      tap(recipes => {
        this._recipes.next(recipes);
      })
      );
  }
  

  getAllRecipes(){
   /* return [...this._recipes];*/
  }

  getRecipe(id: string)
 {
  return this.recipes.pipe(
    take(1),
    map(data => {
      return {...data.find(p => p.id===id)};
    }
    )
  )
  };
  
}

