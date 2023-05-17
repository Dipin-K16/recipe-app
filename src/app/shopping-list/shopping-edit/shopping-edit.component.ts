import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{


  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;
  @ViewChild('f') slForm: NgForm;

  editMode = false
  editedItemIndex: number;
  editedItem: ingredient;

  subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService){}
 

  // @Output() ingredientAdded = new EventEmitter<ingredient>();

  onAddOrUpdateItem(form: NgForm){
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value; //storing the data from form to using ref

    const value=form.value;
    const newIngredient = new ingredient(value.name,value.amount); //passing to constructor ingredient 
    // this.ingredientAdded.emit(newIngredient);

    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editedItemIndex,newIngredient)
    }
    else{

      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode=false;
    form.reset();
  }

  ngOnInit(): void {

    this.subscription=this.shoppingListService.startedEditing.subscribe(
      (index: number)=>{
        this.editedItemIndex=index; //get the index of item which we are going to edit 
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        }
        )
      }
    );  
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    onClear(){
      this.slForm.reset();
      this.editMode=false
    }

    onDelete(){
      this.shoppingListService.deleteIngredient(this.editedItemIndex) //this will pass the selected item to delete so it should be in edit mode to delete that item
      this.onClear();

    }

}


