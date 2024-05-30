import { Component, OnInit, Pipe } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent implements OnInit {

   dateToday: string | undefined;
  name: string |undefined;

  constructor(){}
  ngOnInit(): void {
    this.dateToday=new Date().toString();
    this.name="Moazam";
  }

}
