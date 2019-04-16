import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDatailComponent } from './film-datail.component';

describe('FilmDatailComponent', () => {
  let component: FilmDatailComponent;
  let fixture: ComponentFixture<FilmDatailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmDatailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
