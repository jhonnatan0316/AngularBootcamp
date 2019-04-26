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

  constructor(private filmServ: AnimeFilmService, private router: Router) { }
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

          this.filmServ.setter(this.selectedFilm);
          this.router.navigate(['/gfilm']);
        }
      },
      (error) => {
        console.log('Error please contact the admin');
      }
    );

  }
  createStorage() {
   localStorage.setItem('DeadPool', '2016');
   sessionStorage.setItem('Description', 'La mejor pelicula del mundo :D');
  }

  deleteStorage() {
    localStorage.clear();
    // sessionStorage.removeItem('Description');
  }

  createCookie() {
    document.cookie = 'hello=Do you want a cookie?';
    document.cookie = 'expired=Expired Cookie; expires=Fri, 31 Dec 9999 23:59:59 GTM; path=/expire';
    // document.cookie = 'expired=Expired Cookie; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/expire';
    console.log(document.cookie);
  }
}
