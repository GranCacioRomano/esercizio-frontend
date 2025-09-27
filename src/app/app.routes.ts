import { Routes } from '@angular/router';
import { PersonaListComponent } from './components/persona-list/persona-list.component';
import { PersonaDetailComponent } from './components/persona-detail/persona-detail.component';

export const routes: Routes = [
  {path: 'persone', component: PersonaListComponent},
  {path: 'persone/:id', component: PersonaDetailComponent},
  {path: '', redirectTo: 'persone', pathMatch: 'full' }
];
