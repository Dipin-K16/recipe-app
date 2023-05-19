import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { MealsComponent } from './meals/meals.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'recipes',
    component: RecipesComponent, children:[ //this enables the <router-outlet> to choose which one to load when path has id and path is null
      {
        path:'', component:RecipeStartComponent,
      },
      {
        path:'new', component: RecipeEditComponent //this should be kept above the dynamic routes then only it works
      },
    {
      path: ':id', component: RecipeDetailComponent,
    },
    {
      path:':id/edit', component: RecipeEditComponent 
    }
  
  ]
  },
  {
    path:'shoppinglist',
    component: ShoppingListComponent,
  },
  {
    path:'meals',
    component: MealsComponent,
  },
  {
    path:'home',
    component: HomeComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
