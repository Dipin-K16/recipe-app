import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  subscription: Subscription;
  
  recipes: recipe[];
  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute){}

// @Output() recipeWasSelected = new EventEmitter<recipe>();


  //   new recipe('test','this is a test','https://picsum.photos/200/300'),
  // ]

  ngOnInit(){

    this.recipeService.recipeChanged.subscribe(
      (recipes: recipe[])=>{
        this.recipes = recipes
      }
    )
    this.recipes = this.recipeService.getRecipes();
  }

 

  // onRecipeSelected(recipe: recipe){
  //   this.recipeWasSelected.emit(recipe);
  // }

  
  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route}); //this will add to the current route so id is not need to pass
  }


}
