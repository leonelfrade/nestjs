import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService{
    signin(data){
        return { msg: 'I have signed in'}
    }

    signup(data){
        return { msg: 'I have sign up'}
    }
}