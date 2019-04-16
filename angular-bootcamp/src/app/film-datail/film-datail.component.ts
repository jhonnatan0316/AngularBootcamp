import { Component, OnInit } from '@angular/core';
import { Film } from '../shared/film';
import { Router } from '@angular/router';
import { AnimeFilmService } from '../services/anime-film.service';
@Component({
  selector: 'app-film-datail',
  templateUrl: './film-datail.component.html',
  styleUrls: ['./film-datail.component.css']
})
export class FilmDatailComponent implements OnInit {
  private film: Film;
  constructor(private filmServ : AnimeFilmService, private router: Router) { }

  ngOnInit() {
    this.film = this.filmServ.getter();
  }


  clearFilm(): void {
    this.film = null;
    this.router.navigate(['/']);
  }
}
