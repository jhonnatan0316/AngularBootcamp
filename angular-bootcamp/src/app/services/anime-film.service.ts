import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../shared/AppConstants';

@Injectable({
  providedIn: 'root'
})
export class AnimeFilmService {

  private baseUrl = AppConstants.baseURL;

  constructor(private http: HttpClient) { }

  getFilms(): Observable<any> {

    return this.http.get(this.baseUrl);
  }

  getFilm(idFilm: string): Observable<any> {
    return this.http.get(this.baseUrl +'/' + idFilm);
  }

}
