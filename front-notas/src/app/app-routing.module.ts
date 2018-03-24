import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListNotasComponent} from '../app/components/list-notas/list-notas.component';
import { AddNoteCardComponent } from '../app/components/add-note-card/add-note-card.component';

const routes: Routes = [
  { path: '', component: ListNotasComponent },
  { path: 'add', component: AddNoteCardComponent}
  { path: 'edit', component: AddNoteCardComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
