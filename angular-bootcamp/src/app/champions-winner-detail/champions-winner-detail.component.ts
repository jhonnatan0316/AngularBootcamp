import { Component, OnInit, Input } from '@angular/core';
import { Winner } from '../shared/winner'

@Component({
  selector: 'app-champions-winner-detail',
  templateUrl: './champions-winner-detail.component.html',
  styleUrls: ['./champions-winner-detail.component.css']
})
export class ChampionsWinnerDetailComponent implements OnInit {

  @Input() winner: Winner;
  constructor() { }

  ngOnInit() {
  }
  
  clearrWinner(winner: Winner): void {
    this.winner = null;
  }
}
