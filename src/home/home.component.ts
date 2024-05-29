import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Binding';
 
  //This is Interpolation Binding in which we do one way binding we sent data to client from this typescipt file
  //Down here i make a variable name and call it i html File by specifing curly brakets like this {{name}}
  //Interpolation Binding is only String binding for boolean value property binding is good option
  public name="Ali";

  public age=89;

  //Property binding is also oneway binding, Here is Example How We done Proprety binding in angular 17 

  public liveImg="https://images.app.goo.gl//S5yke3pAK6kB785z6.png";

  public image="/assets/imogi.png"

  //Event Binding, Here we recieve Data from User. We make method and ue this method in html file 
OnClick()
{
  console.log("Thanks for clicking")
}

//Two Way Binding
//We import FormsModele and declare it in @Components import. 

public value="";
}
