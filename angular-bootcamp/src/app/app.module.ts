import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChampionsWinnerComponent } from './champions-winner/champions-winner.component';
import { ChampionsWinnerDetailComponent } from './champions-winner-detail/champions-winner-detail.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AnimeFilmComponent } from './anime-film/anime-film.component';
import { FilmDatailComponent } from './film-datail/film-datail.component';

import { ResponseInterceptor } from './interceptor/response.interceptor';
import { RequestInterceptor } from './interceptor/request.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ChampionsWinnerComponent,
    ChampionsWinnerDetailComponent,
    AnimeFilmComponent,
    FilmDatailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
