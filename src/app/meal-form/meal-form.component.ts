import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Meal} from '../meal';

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css']
})
export class MealFormComponent implements OnInit {

  newMeal = new Meal("",0,"");
  @Output() addMeal = new EventEmitter<Meal>();

  submitMeal(){
  this.addMeal.emit(this.newMeal);
  }

  constructor() { }

  ngOnInit() {
  }

}
