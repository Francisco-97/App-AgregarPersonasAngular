import { Component, ElementRef, EventEmitter, Output, ViewChild,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LogginService } from '../../LoggingService.service';



import { Persona } from '../../Persona.Model';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers:[LogginService]
  
})
export class FormularioComponent {

  nombreInput:string;
  apellidoInput:string;
  index:number
  modoEdicion:number;
  

  //@ViewChild('nombreInput') nombreInput: ElementRef;
  //@ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor(private loggingService:LogginService, private personaService:PersonasService, private routes:Router, private route:ActivatedRoute){
    this.personaService.saludo.subscribe((i:number) => alert("Selecciono el Indice: " + i))
  }

  
  ngOnInit(): void{
  this.index = this.route.snapshot.params['id'];
  this.modoEdicion = +this.route.snapshot.queryParams['ModoEdicion'];
  if(this.modoEdicion != null && this.modoEdicion === 1){
    let persona: Persona = this.personaService.encontrarPersona(this.index);
    this.nombreInput = persona.Nombre;
    this.apellidoInput = persona.Apellido;
  }
  }

  Guardar(){
    //let persona = new Persona(this.nombreInput.nativeElement.value,this.apellidoInput.nativeElement.value);
    //this.personas.push(persona);
    //this.loggingService.EnviarMensaje("Se a Logeado"+ persona.Nombre+" "+ persona.Apellido);
    //this.PersonaCreada.emit(persona) 
    let persona = new Persona(this.nombreInput,this.apellidoInput)
    if(this.modoEdicion != null && this.modoEdicion === 1){
    this.personaService.ModificarPersona(this.index, persona)
    }else{
      this.personaService.PersonaAgregada(persona);
    }
    
    this.routes.navigate(['personas']);
  }

  eliminarPersona(){
    if(this.index != null){
      this.personaService.eliminarPersona(this.index)
    }
    this.routes.navigate(['personas'])
  }

}
