import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    get isLoggedIn (){
        return localStorage.getItem('token')
    }

    login (user){
        if(user){
            localStorage.setItem('token', 'youlogged')
        }
    }

    register(user){

    }

    logout (){
        localStorage.setItem('token', null)
    }
}