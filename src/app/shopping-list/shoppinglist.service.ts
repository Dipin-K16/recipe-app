import { EventEmitter } from "@angular/core";
import { ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService{

    ingredientsChanged = new EventEmitter<ingredient[ ]>()

    startedEditing = new Subject<number>();

    private ingredients: ingredient[]=[
        new ingredient('apples',5),
        new ingredient('tomatoes',55),
        new ingredient('carrot',7),
      ]; //creating a aray of ingredient of type ingredient in model

      getIngredients(){
        return this.ingredients.slice();  // create a copy of ingredients using slice
      }


      addIngredient(ingredient: ingredient){
        this.ingredients.push(ingredient);
         //this will get the ingredient added from the ingredientadd component, from there it uses service injection and call this function and asign the ingredient 
         this.ingredientsChanged.emit(this.ingredients.slice())
      }

      addIngredientsFromrecipe(ingredients: ingredient[]){
        // for (let ingredient of this.ingredients){
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice())
      }
   

      getIngredient(index: number){
        return this.ingredients[index];
      }
    
      updateIngredient(index: number, newIngredient: ingredient){
        this.ingredients[index]=newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      deleteIngredient(index: number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice()) 
      }

}