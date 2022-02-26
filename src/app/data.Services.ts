import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginService } from "./login/login.Service";
import { Persona } from "./Persona.Model";

@Injectable()
export class DataServices{
    token = this.loginService.getIdToken();
    url:string = 'https://listado-personas-1628f-default-rtdb.firebaseio.com/data.json?auth='+ this.token;
    
    constructor(private http:HttpClient,private loginService:LoginService){}

    cargarPersona(){
        
        return this.http.get(this.url);
    }
    agregarPersona(persona:Persona[]){
        this.http.put(this.url,persona).subscribe(
            Response => console.log('Agregador nueva persona'),
            error => console.log('No se pudo agregar Persona')
            
        );
    }

    modificarPersona(index:number, persona:Persona){
        let url:string = 'https://listado-personas-1628f-default-rtdb.firebaseio.com/data/'+index+'.json?auth='+this.token;
        this.http.put(url,persona).subscribe(
            res => console.log("Se modifico el resgistro"+res),
            error => console.log("Error al modificar Resgistro"+error)
        )
    }

    eliminarPersona(index:number){
        let url:string = 'https://listado-personas-1628f-default-rtdb.firebaseio.com/data/'+index+'.json?auth='+this.token;
        this.http.delete(url).subscribe(
            res => console.log("Resgistro eliminado con satisfacion",res),
            error => console.log("Error a Eliminar Registro",error)
        )
    }
}