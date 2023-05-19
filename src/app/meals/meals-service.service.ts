import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MealsServiceService {

  constructor(private http: HttpClient) { }

  getMealsCategories(){
    return this.http.get('https://www.themealdb.com/api/json/v1/1/categories.php');
  }

  getMeals(){
    return this.http.get('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken');
  }

}
