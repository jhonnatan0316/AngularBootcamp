import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeFilmComponent } from './anime-film.component';

describe('AnimeFilmComponent', () => {
  let component: AnimeFilmComponent;
  let fixture: ComponentFixture<AnimeFilmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimeFilmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
