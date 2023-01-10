
import { Component } from "@angular/core";

@Component(
  {
    selector: 'app-proprety-card',
    //template: '<h1> I am a card</h1>',
    templateUrl:'proprety-card.component.html',
   // styles: ['h1 {font-weight: normal;}']
   styleUrls: ['proprety-card.component.css']
  }
)
export class PropretyCardComponent {
  Proprety:any =  {
    "Id":1,
    "Name":"New Balance 530",
    "Type":"House",
    "Price":14200
  }
}
