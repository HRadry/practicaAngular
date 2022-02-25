import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  user!: FormGroup; 
  expression : boolean = true; 

  constructor(private fb: FormBuilder, private router: Router
    ,private loginService: LoginService) { }

  ngOnInit(): void {
    console.log("soy formulario");

    this.createForm();
  }

  createForm(): void{
    this.user = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required]
    })

  }

  submit():void{
    const user: User = {
      nombre: this.nombre?.value,
      apellido: this.apellido?.value
    };
    
    //this.loginService.checkUser(user);
    this.expression = this.loginService.checkUser(user);
    if (this.expression){
      this.router.navigateByUrl('/menu');
    }{
      setTimeout(()=> this.expression=true, 3000);
    }
    //this.loginService.checkUser(user);   
    //console.log("Correcto")
  }


  get nombre(){
    return this.user.get('nombre');
  }

  get apellido(){
    return this.user.get('apellido');
  }

}
