import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-meal',
  templateUrl: './find-meal.component.html',
  styleUrls: ['./find-meal.component.css']
})
export class FindMealComponent implements OnInit{
  constructor(private http: HttpClient){}

  search: string;
  mealId: number=null;
  meals: any[]
  mealDetail: any

  getMeals(query: string){
     this.http.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`).subscribe((result: any)=>{
      this.meals=result.meals;
      // console.log("searched meals",this.meals);
      
     });
  }


  submitSearch(){
    this.getMeals(this.search)
  }


  getDetail(meal: any){
    this.mealId = meal.idMeal;
    console.log("meal id",meal.idMeal);
    
    this.getMealDetail(this.mealId)
  }

  ngOnInit(): void {
  }
  
  getMealDetail(id: number){
    this.http.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).subscribe((result: any)=>{
    this.mealDetail=result.meals;
    console.log("meal detail", this.mealDetail);
    console.log("meal name",this.mealDetail[0].strMeal);
    
      })
  }
}
