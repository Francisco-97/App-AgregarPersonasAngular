import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { LoginService } from './login/login.Service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Persona';


  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyC5TCCcAgbo9-BlJPB3aGxCShpze0WT-hg",
      authDomain: "listado-personas-1628f.firebaseapp.com",
    });
  }

  isAutenticado(){
    return this.loginService.isAutenticado();
  }
  Salir(){
    this.loginService.logout();
  }
}
