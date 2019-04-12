import { Component, OnInit } from '@angular/core';
import { Winner } from '../shared/winner';
import { WINNERS } from '../util/mock-winners';

@Component({
  selector: 'app-champions-winner',
  templateUrl: './champions-winner.component.html',
  styleUrls: ['./champions-winner.component.css']
})
export class ChampionsWinnerComponent implements OnInit {

  winners = WINNERS;
  selectedWinner: Winner;
  constructor() { }
  showList: boolean;
  ngOnInit() {
    this.showList = true;
  }
  
  onSelect(winner: Winner): void {
    this.selectedWinner = winner;
    this.showList = false;
  }


  showTable(event){
    this.showList = event.show;
  }
}
