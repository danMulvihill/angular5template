import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ImgGalComponent } from './img-gal/img-gal.component';
import { FormComponent } from './form/form.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent, 
    MainNavComponent, ImgGalComponent, FormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
