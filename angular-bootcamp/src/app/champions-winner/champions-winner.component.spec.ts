import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsWinnerComponent } from './champions-winner.component';

describe('ChampionsWinnerComponent', () => {
  let component: ChampionsWinnerComponent;
  let fixture: ComponentFixture<ChampionsWinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionsWinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionsWinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
