import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: `
  <div style="text-align:center">
      <h1>{{title}}</h1>
      <h2 *ngIf="subTitle">{{subTitle}}</h2>
      
      <app-main-nav></app-main-nav>
  </div>
  
<hr />

<app-img-gal></app-img-gal>
<app-form></app-form>
<h2>Data Service: {{myProp}}</h2>
<h3>To turn on the server from the cli:</h3>
<p>ng serve</p>
<h3>To create a new component on the cli:</h3>
<p>ng generate component your-component-name</p>
<h3>To create a new service</h3>
<p>ng generate service your-service-name</p>
<h3>Here are some links to help you start: </h3>

<ul>
  <li><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></li>
  <li><a target="_blank" rel="noopener" href="https://github.com/angular/angular-cli/wiki">CLI Documentation</a></li>
  <li><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></li>
</ul>
<h4>{{greetYear()}} <small>Exact time: {{getDateTime()}}</small></h4>

  `,
  styles: [`
      body{background-color: #ccc}
      h2{color: darkgreen}
      small {float: right; color: green}
      `]
})
export class AppComponent {
  constructor(private dataservice: DataService){
      
  }
  myProp: string = '';
  ngOnInit(){
    //console.log(this.dataservice.fruit)
    this.myProp = this.dataservice.myFruit();
  }

  greetYear(){
    return "Welcome, "+ new Date().getFullYear();
  }
  getDateTime(){
    return new Date()
  }
  public title = 'Angular 2+ Template';
  public subTitle = "Subtitle would go here (if you wanted one)";
}
