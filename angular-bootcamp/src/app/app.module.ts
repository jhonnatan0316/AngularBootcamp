import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChampionsWinnerComponent } from './champions-winner/champions-winner.component';
import { ChampionsWinnerDetailComponent } from './champions-winner-detail/champions-winner-detail.component';
import {HttpClientModule} from '@angular/common/http';
import { AnimeFilmComponent } from './anime-film/anime-film.component';
import { FilmDatailComponent } from './film-datail/film-datail.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
