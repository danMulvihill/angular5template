import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-gal',
  templateUrl: './img-gal.component.html',
  styleUrls: ['./img-gal.component.css']
})
export class ImgGalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title="Image Gallery"
  angularLogo = './assets/img/ng.png';
  angularLogo2 = './assets/img/ng2.png';
  angularLogo3 = './assets/img/ng3.jpg';
}
