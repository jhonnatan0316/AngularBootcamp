import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Film } from '../shared/film';
import { Router } from '@angular/router';
import { AnimeFilmService } from '../services/anime-film.service';
@Component({
  selector: 'app-film-datail',
  templateUrl: './film-datail.component.html',
  styleUrls: ['./film-datail.component.css']
})
export class FilmDatailComponent implements OnInit {
  @Input() filmm: Film;
  private film: Film;
  @Output() showListFilms = new EventEmitter;

  show: boolean;

  constructor(private filmServ : AnimeFilmService, private router: Router) { }

  ngOnInit() {
    this.filmm = this.filmServ.getter();
    console.log('the film is input: ',this.filmm )
    console.log('the film is: ',this.film )
  }


  clearFilm(): void {
    this.film = null;
    this.router.navigate(['/']);
  }
}
