import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import * as firebase from "firebase/auth";

@Injectable()
export class LoginService{
    token:string;
    constructor(private router:Router){}

    Login(email:string,password:string){
        const auth = firebase.getAuth();
        firebase.signInWithEmailAndPassword(auth,email,password).then(
            res => {
                auth.currentUser?.getIdToken().then(
                    token =>{
                        this.token = token;
                        this.router.navigate(['/']);
                    }
                )
            }
        )
        
    }

    getIdToken(){
        return this.token;
    }

    isAutenticado(){
        return this.token != null;
    }

    logout(){
        firebase.getAuth().signOut().then( () => {
            this.token == null;
            this.router.navigate(['/login']);
        } ).catch( error => {console.log("Error a Deslogearse"+error)})
    }
}