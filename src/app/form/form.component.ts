import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }


  doSomething(e){
    console.log(e);
    let dataOut = document.querySelector("#data-out");
    dataOut.innerHTML = "<strong>Event(s) recorded:</strong>";
    dataOut.innerHTML += "<br> screen X: "+e.screenX+" | screen Y: "+e.screenY;
    dataOut.innerHTML += "<br> client X: "+e.clientX+" | client Y: "+e.clientY;
  }


  ngOnInit() {
  }

}
