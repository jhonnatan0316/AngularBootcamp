import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChampionsWinnerComponent } from './champions-winner/champions-winner.component';
import { ChampionsWinnerDetailComponent } from './champions-winner-detail/champions-winner-detail.component';

const routes: Routes = [{ path: '', component: ChampionsWinnerComponent },
{ path: 'championwinnerdetail', component: ChampionsWinnerDetailComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
