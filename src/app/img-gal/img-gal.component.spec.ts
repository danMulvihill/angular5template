import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgGalComponent } from './img-gal.component';

describe('ImgGalComponent', () => {
  let component: ImgGalComponent;
  let fixture: ComponentFixture<ImgGalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgGalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgGalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
