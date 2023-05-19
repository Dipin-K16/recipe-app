import { Component, Input, OnInit } from '@angular/core';
import { recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ingredient } from 'src/app/shared/ingredient.model';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
  
  recipe: recipe;
  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router){}

ngOnInit(): void {
    this.route.params.subscribe(   //params is used to take index number or id
      (params: Params)=>{
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id)
      }
    )
}  

  onAddToShopList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }

  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo: this.route})
  }

onDeleteRecipe(){
  // this.recipeService.deleteRecipe(this.id)
}

}
