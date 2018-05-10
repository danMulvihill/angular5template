import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor() { }
  public dataOut = document.querySelector("#data-out");
  doSomething(e){
    console.log(e);
    
    this.dataOut.innerHTML = "<strong>Event(s) recorded:</strong>";
    this.dataOut.innerHTML += "<br> screen X: "+e.screenX+" | screen Y: "+e.screenY;
    this.dataOut.innerHTML += "<br> client X: "+e.clientX+" | client Y: "+e.clientY;
  }
  logMessage(value){
    console.log("Howdy "+value);
    //this.dataOut.innerHTML +="<br>";
  }

  ngOnInit() {}
  public name = "";
  public myId = "7";
  public isDisabled = false;
}
