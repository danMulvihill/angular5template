import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  fruit = ['tomato', 'eggplant', 'pumpkin', 'kiwi', 'breadfruit', 'cherimoya']
  
  myFruit(){
    return "I want "+this.fruit[Math.floor(Math.random()*this.fruit.length)];
  }
}
