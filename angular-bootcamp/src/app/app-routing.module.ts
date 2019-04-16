import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChampionsWinnerComponent } from './champions-winner/champions-winner.component';
import { ChampionsWinnerDetailComponent } from './champions-winner-detail/champions-winner-detail.component';
import { AnimeFilmComponent } from './anime-film/anime-film.component';
import { FilmDatailComponent } from './film-datail/film-datail.component';

const routes: Routes = [{ path: 'championwinner', component: ChampionsWinnerComponent },
{ path: 'championwinnerdetail', component: ChampionsWinnerDetailComponent },
{ path: '', component: AnimeFilmComponent },
{ path: 'gfilm', component: FilmDatailComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
