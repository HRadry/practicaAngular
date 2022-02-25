import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: number[] = [];
  dataFather: string = '';
  message: number = 0;



  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    console.log("soy menu");

    //this.user = this.loginService.userInfo;

  }

  logout(){
    this.loginService.logout();
  }

  values(event: any){
    this.dataFather = event;
  }
  recibirData(event: any){
    const data: number = event;
    if(data > 0){
      this.items.push(data);
    }else if(data < 0){
      this.items.pop();
    }
  }
}
