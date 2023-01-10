import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { PropretyCardComponent } from './proprety/proprety-card/proprety-card.component';
import { PropretyListComponent } from './proprety/proprety-list/proprety-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PropretyCardComponent,
    PropretyListComponent,
      NavBarComponent
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
