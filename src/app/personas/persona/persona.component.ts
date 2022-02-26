import { Component ,Input,OnInit } from '@angular/core';
import { Persona } from '../../Persona.Model';
import { PersonasService } from '../../personas.service';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input() item:Persona;
  @Input() i:number; 
  
  constructor(private PersonaSer:PersonasService) { }

  ngOnInit(): void {
  }

  IndicarIndice():void{
    this.PersonaSer.saludo.emit(this.i);
    
  }

}
