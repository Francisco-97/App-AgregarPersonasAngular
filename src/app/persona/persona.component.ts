import { Component ,Input,OnInit } from '@angular/core';
import { Persona } from '../Persona.Model';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input() item:Persona;
  @Input() i:number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
