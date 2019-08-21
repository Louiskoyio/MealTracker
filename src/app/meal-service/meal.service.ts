import { Injectable } from '@angular/core';
import { Meal } from '../meal';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  meals:Meal[] = [
    new Meal("Hotdog",100,'description'),
    new Meal("Chips Masala",290,'description'),
    new Meal("Banana",320,'description'),
    new Meal("Apples",100,'description'),
    new Meal("Orange",90,'description'),
    new Meal("Sembe",80,'description')
  ];

  getMeals(): Meal[]{
    return this.meals;
  }


  constructor() { }
}
