import { Component, EventEmitter, Output } from '@angular/core';
import { Persona } from '../Persona.Model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  nombreInput:string = "";
  apellidoInput:string="";
  
  @Output() PersonaCreada = new EventEmitter<Persona>();

  agregar(){
    let persona = new Persona(this.nombreInput,this.apellidoInput);
    //this.personas.push(persona);
    this.PersonaCreada.emit(persona)
    
  }

}
