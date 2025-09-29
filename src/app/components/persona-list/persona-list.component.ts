import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Persona } from '../../models/persona.model';
import { FormsModule } from '@angular/forms';
import { PersonaService } from '../../services/persona.service';
import { ResidenzaService } from '../../services/residenza.service';
import { NavbarComponent } from "../navbar/navbar.component";
import { NgFor, NgIf } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-persona-list',
  imports: [SharedModule, RouterLink, NavbarComponent],
  templateUrl: './persona-list.component.html',
  styleUrl: './persona-list.component.scss'
})
export class PersonaListComponent  implements OnInit {
  persone: Persona[] = [];
  indirizzo: string = '';

  constructor(private personaService: PersonaService,
              private residenzaService: ResidenzaService) {}

  ngOnInit() {
    this.loadPersone();
  }

  loadPersone() {
    this.personaService.getAll().subscribe(p => this.persone = p);
  }

  filterByIndirizzo() {
    if (this.indirizzo) {
      this.residenzaService.getPersoneByIndirizzo(this.indirizzo).subscribe(p => this.persone = p);
    } else {
      this.loadPersone();
    }
  }
}
