import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-ver-persona',
  templateUrl: './ver-persona.component.html',
  styleUrls: ['./ver-persona.component.css']
})
export class VerPersonaComponent implements OnInit {

  constructor(private _personaService: PersonaService) { }

  ngOnInit(): void {

    this.obtenerPersona();

  }
    obtenerPersona(){

      this._personaService.getDato(1).subscribe(data => {
        console.log(data)


      })

    }



}
