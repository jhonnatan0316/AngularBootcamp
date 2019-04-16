import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Film } from '../shared/film';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-datail',
  templateUrl: './film-datail.component.html',
  styleUrls: ['./film-datail.component.css']
})
export class FilmDatailComponent implements OnInit {
  @Input() film: Film;

  @Output() showListFilms = new EventEmitter;

  show: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('the film is: ',this.film )
  }


  clearFilm(): void {
    this.film = null;
    this.router.navigate(['/']);
  }
}
