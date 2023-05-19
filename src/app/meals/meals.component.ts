import { Component, OnInit } from '@angular/core';
import { MealsServiceService } from './meals-service.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  meals: any[]=[]
  constructor(private mealsService: MealsServiceService){}

  ngOnInit(){
      this.getMealsByCategories();
      this.getMeals();
  }
  getMealsByCategories(){
    this.mealsService.getMealsCategories().subscribe((result: any)=>{
      this.meals=result.categories;
      console.log(this.meals);
     })
  }
  
  getMeals(){
    this.mealsService.getMeals().subscribe((result: any)=>{ 
      console.log(result);
      
  })}

}


