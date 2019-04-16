import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from '../shared/film';
import { AnimeFilmService } from '../services/anime-film.service';

@Component({
  selector: 'app-anime-film',
  templateUrl: './anime-film.component.html',
  styleUrls: ['./anime-film.component.css']
})
export class AnimeFilmComponent implements OnInit {

  constructor(private filmServ : AnimeFilmService, private router: Router) { }
  films: Film[];
  film: Film;
  selectedFilm: Film;
  showList: boolean;

  ngOnInit() {
    this.showList = true;

    this.filmServ.getFilms().subscribe(
      result => {
        if (result === null) {
          console.log('No Films founds');
        } else {
          this.films = result;
        }
      },
      (error) => {
        console.log('Error please contact the admin');
      }
    );
  }

  getFilm(film: Film) {
    this.filmServ.getFilm(film.id).subscribe(
      result => {
        if (result === null) {
          console.log('No Film found');
        } else {
          this.selectedFilm = result;
          console.log('selectef film: ', this.selectedFilm);
          this.filmServ.setter(this.selectedFilm);
          this.router.navigate(['/gfilm']);
        }
      },
      (error) => {
        console.log('Error please contact the admin');
      }
    );
  

  }

}
