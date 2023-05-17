import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  ingredients: ingredient[]=[];
  // private subscription: Subscription

  constructor(private shoppingListService: ShoppingListService){ }

  ngOnInit(): void {
     this.ingredients = this.shoppingListService.getIngredients()  //used instead of onIngAdded

     this.shoppingListService.ingredientsChanged.subscribe((ingredients: ingredient[])=>{ //this is used to add the ingredients to the emited so the array will be updated
      this.ingredients = ingredients; 
     })
  }

  onEditItem(index: number){

    this.shoppingListService.startedEditing.next(index)
    
  }

  
  // onIngAdded(ingredient: ingredient){
  //   this.ingredients.push(ingredient)
  // }

}
