import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Winner } from '../shared/winner'

@Component({
  selector: 'app-champions-winner-detail',
  templateUrl: './champions-winner-detail.component.html',
  styleUrls: ['./champions-winner-detail.component.css']
})
export class ChampionsWinnerDetailComponent implements OnInit {

  @Input() winner: Winner;

  @Output() showListCampions = new EventEmitter;
  show: boolean;
  constructor() { }

  ngOnInit() {
  }
  
  clearrWinner(event, winner: Winner): void {
    this.winner = null;
    this.showListCampions.emit({show:true});
  }
}
