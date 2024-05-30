import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-e-info',
  standalone: true,
  imports: [NgFor],
  templateUrl: './e-info.component.html',
  styleUrl: './e-info.component.css',
  providers: [DataService]
})
export class EInfoComponent implements OnInit{
  
  //There are three type f DI, 
  /*Constocter (Most Commen in Angular Case)
  * Parameter (Setter Injection) (There are few drawbacks because of lifecycle managemnent issue)
   Interface Injection (Not used Directly)
  *
  */
 //Here we are injecting Dependency injection inside our constructor, 
  
  constructor(private dServise: DataService)
  {
  }
  infoRecieved1:string[]=[];
  infoRecieved2:string[]=[];
  infoRecieved3:string[]=[];
  getInfoFromService1(){
    this.infoRecieved1=this.dServise.getInfo1();
  }
  getInfoFromService2(){  
      this.infoRecieved2=this.dServise.getInfo2();
    }
  getInfoFromService3(){ 
       this.infoRecieved3=this.dServise.getInfo3();
      }

  ngOnInit(){
  }
}
