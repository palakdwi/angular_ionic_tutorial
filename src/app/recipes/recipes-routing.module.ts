import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesPage } from './recipes.page';

const routes: Routes = [
  {
    path: '',
    component: RecipesPage 
  },
  {
    path: 'new-recipes',
    loadChildren: () => import('./new-recipes/new-recipes.module').then( m  => m.NewRecipesPageModule)
  },
  {
    path: 'recipe-detail-page',
    loadChildren: () => import('./recipe-detail-page/recipe-detail-page.module').then( m => m.RecipeDetailPagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesPageRoutingModule {}
