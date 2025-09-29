import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Persona } from '../../models/persona.model';
import { PersonaService } from '../../services/persona.service';
import { SharedModule } from '../../shared/shared.module';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-persona-detail',
  standalone: true,
  templateUrl: './persona-detail.component.html',
  imports: [SharedModule, RouterLink]
})
export class PersonaDetailComponent implements OnInit {
  persona?: Persona;

  constructor(
    private route: ActivatedRoute,
    private personaService: PersonaService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personaService.getById(id).subscribe({
      next: (data) => (this.persona = data),
      error: (err) => console.error(err)
    });
  }
}
