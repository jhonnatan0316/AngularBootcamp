import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsWinnerDetailComponent } from './champions-winner-detail.component';

describe('ChampionsWinnerDetailComponent', () => {
  let component: ChampionsWinnerDetailComponent;
  let fixture: ComponentFixture<ChampionsWinnerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionsWinnerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionsWinnerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
