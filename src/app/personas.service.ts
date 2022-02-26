import { EventEmitter, Injectable } from "@angular/core";
import { DataServices } from "./data.Services";
import { LogginService } from "./LoggingService.service";
import { Persona } from "./Persona.Model";

@Injectable()
export class PersonasService{
    persona:Persona[] = [];

    saludo = new EventEmitter<number>();
    constructor(private loggingService:LogginService, private dataServices:DataServices){}
    
    setPersona(persona:Persona[]){
        this.persona = persona
    }

    obtenerPersona(){
        return this.dataServices.cargarPersona()
    }

    PersonaAgregada(persona: Persona){
        this.loggingService.EnviarMensaje("Se a Logeado "+ persona.Nombre+" "+ persona.Apellido);
        if(this.persona == null){
            this.persona = []
        }
        this.persona.push(persona);
        this.dataServices.agregarPersona(this.persona);
      }
      
      encontrarPersona(index:number){
          let persona: Persona = this.persona[index];
          return persona;
      }

      ModificarPersona(index:number, persona:Persona){
          let persona1 = this.persona[index];
          persona1.Nombre = persona.Nombre;
          persona1.Apellido = persona.Apellido;
          this.dataServices.modificarPersona(index,persona);
      }

      eliminarPersona(index:number){
          this.persona.splice(index,1);
          this.dataServices.eliminarPersona(index);
          this.RegenerarRegistro();
      }

      RegenerarRegistro(){
          if(this.persona != null){
              this.dataServices.agregarPersona(this.persona)
          }
      }
}