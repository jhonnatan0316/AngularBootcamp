import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChampionsWinnerComponent } from './champions-winner/champions-winner.component';
import { ChampionsWinnerDetailComponent } from './champions-winner-detail/champions-winner-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampionsWinnerComponent,
    ChampionsWinnerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
