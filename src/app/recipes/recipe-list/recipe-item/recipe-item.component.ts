import { Component, EventEmitter, Input, Output } from '@angular/core';
import { recipe } from '../../recipe.model';
// import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

  @Input() index: number;
  @Input() recipes: recipe; // coming from recipelist component4

  // constructor(private recipeService: RecipeService){}


  //  @Output() recipeSelected = new EventEmitter<void>();


  // onSelected(){
  // this.recipeSelected.emit();

  // this.recipeService.recipeSelected.emit(this.recipes);

  // }





}
