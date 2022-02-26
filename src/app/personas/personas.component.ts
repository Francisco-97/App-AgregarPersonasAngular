import { Component, OnInit } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { Persona } from '../Persona.Model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas:Persona[]=[];

  constructor(private personaService:PersonasService, private routes:Router){}
  
  
  
  ngOnInit(): void {
    
    this.personaService.obtenerPersona().subscribe(
      res => {
        this.personas = <Persona[]>res;
        this.personaService.setPersona(<Persona[]>res);
      }
    )
  }

  AgregarPersona(){
  this.routes.navigate(['personas/agregar'])
  }
  PersonaAgregada(persona: Persona){
    //this.personas.push(persona)
    this.personaService.PersonaAgregada(persona);
  }
}
