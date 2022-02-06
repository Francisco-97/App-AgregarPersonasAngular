import { Component } from '@angular/core';
import { Persona } from './Persona.Model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Persona';
  personas:Persona[]=[new Persona("Francisco","Santos de los Santos"),
  new Persona("Daniella","Gonzalez Luis")];

  nombreInput:string = "";
  apellidoInput:string="";

  agregar(){
    let persona = new Persona(this.nombreInput,this.apellidoInput);
    this.personas.push(persona);
  }
}
