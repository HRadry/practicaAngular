import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user!: User;
  constructor() { }

  checkUser(user: User): boolean{
    //this.user = user;
    //localStorage.setItem('user', JSON.stringify(user));
    const userInfo = localStorage.getItem('user');
    const dataUser : User = JSON.parse(userInfo!);

    if(dataUser.nombre == user.nombre && dataUser.apellido == user.apellido){
      user.active = true;
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }

    return false;
  }

  validateSession(): boolean{
    const userInfo = localStorage.getItem('user');
    const dataUser : User = JSON.parse(userInfo!);

    if(dataUser.active){
      return true;
    }
    return false;
  }

  logout(): void{
    const userInfo = localStorage.getItem('user');
    const dataUser : User = JSON.parse(userInfo!);
    console.log(dataUser);
    dataUser.active = false;
    localStorage.setItem('user', JSON.stringify(dataUser));
    console.log(dataUser);

  }


  get userInfo(){
    return this.user;
  }
}
