import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  info1: string[]=["John1","Metheo","john.email"]
  info2: string[]=["John2","Metheo","john.email"]
  info3: string[]=["John3","Metheo","john.email"]

  getInfo1():string[]{
    return this.info1;
  }
  getInfo2():string[]{
    return this.info2;
  }
  getInfo3():string[]{
    return this.info3;
  }
  constructor() { }
}
