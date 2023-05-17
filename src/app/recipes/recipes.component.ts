import { Component, OnInit } from '@angular/core';
import { recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit{

  constructor(private recipeService: RecipeService){}

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe: recipe)=>{   //recipe is emitted from recipeitem and service is used to emit
      this.selectedRecipe = recipe
    })
  }

  selectedRecipe: recipe; //this is passed to recipeDetail component





}
