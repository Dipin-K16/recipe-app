import { EventEmitter, Injectable } from "@angular/core";
import { recipe } from "../recipes/recipe.model";
import { ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppinglist.service";
import { Subject } from "rxjs";


@Injectable()
export class RecipeService {

    constructor(private shoppingListService: ShoppingListService) { } //it can be injected using the annotation @injectable
    
    recipeChanged = new Subject<recipe[]>()

    recipeSelected = new EventEmitter<recipe>();

    private recipes: recipe[] = [
        new recipe('Meat burger', 'A combo offer ', 'https://picsum.photos/200/300', [new ingredient('meat', 1), new ingredient('tomatoe', 2)]),
        new recipe('A test recipi', 'this is simple test', 'https://picsum.photos/200/300', [new ingredient('meat', 1), new ingredient('tomatoe', 2)]),
    ]

    getRecipes() {
        return this.recipes.slice(); //we get only the copy of this array outside using slice
    }

    addIngredientsToShoppingList(ingredient: ingredient[]) {
        this.shoppingListService.addIngredientsFromrecipe(ingredient);
    }

    getRecipe(index: number) {
        return this.recipes.slice()[index];
    }

    addRecipe(recipe: recipe){
        this.recipes.push(recipe)
        this.recipeChanged.next(this.recipes.slice());
    
    }

    updateRecipe(index: number, newRecipe: recipe){
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

}