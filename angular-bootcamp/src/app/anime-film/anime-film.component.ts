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
  createSession() {
    const local = localStorage.setItem('DeadPool', '2016');
    console.log(local);
    const session = sessionStorage.setItem('Description', 'La mejor pelicula del mundo :D')
    console.log(session);
  }

  deleteSession() {
    localStorage.clear();
    //sessionStorage.removeItem('Description');
  }

  createCookie() {
    document.cookie = "hello=Do you want a cookie?";
    document.cookie = "cookie=Expired Cookie?; expires=Fri, 26 Apr 2019 12:00:00 GTM";
    console.log(document.cookie);
  }
}
