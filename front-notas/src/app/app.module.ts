import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NotasService } from '../app/services/notas.service';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ListNotasComponent } from './components/list-notas/list-notas.component';
import { AppRoutingModule } from './/app-routing.module';
import { AddNoteCardComponent } from './components/add-note-card/add-note-card.component';


@NgModule({
  declarations: [
    AppComponent,
    ListNotasComponent,
    AddNoteCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [NotasService],
  bootstrap: [AppComponent],

})
export class AppModule { }
