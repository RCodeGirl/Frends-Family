import { Component } from '@angular/core';

@Component({
  selector: 'app-proprety-list',
  templateUrl: './proprety-list.component.html',
  styleUrls: ['./proprety-list.component.css']
})
export class PropretyListComponent {
  properties: Array<any> =  [
   {
    "Id":1,
    "Name":"New Balance 530",
    "Type":"House11",
    "Price":14200
   },
   {
    "Id":2,
    "Name":"Adidas Ozweego Celox",
    "Type":"House2",
    "Price":14200
   },
   {
    "Id":3,
    "Name":"Puma Serve Pro",
    "Type":"House3",
    "Price":14200
   },
   {
    "Id":4,
    "Name":"Reebok Nano X2",
    "Type":"House4",
    "Price":14200
   },
   {
    "Id":5,
    "Name":"Nike City Rep TR",
    "Type":"House5",
    "Price":14200
   },
   {
    "Id":6,
    "Name":"GUCCI TENNIS",
    "Type":"House6",
    "Price":14200
   }]
}
