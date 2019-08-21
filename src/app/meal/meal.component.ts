import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Meal} from '../meal';
import { MealService } from '../meal-service/meal.service';
import { AlertService } from '../alert-service/alert.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  @Input() meal: Meal;
  @Output() isComplete = new EventEmitter<boolean>();

  meals:Meal[];
  alertService:AlertService;

  addNewMeal(meal){
    this.meals.push(meal)
  }


  constructor(mealService:MealService,  alertService:AlertService, private http:HttpClient) { 
    this.meals = mealService.getMeals()
    this.alertService = alertService;

  }

  deleteMeal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this meal?`)

      if (toDelete){
        this.meals.splice(index,1)
        this.alertService.alertMe("The meal has been deleted")
      }
    }
  }



  ngOnInit() {

  }
}