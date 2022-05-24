import { Component } from "@angular/core";

@Component({
    selector: 'app-property-card',
    //template:`<h1>I am a Card</h1>`,
    templateUrl: './property-card.component.html',
    //styles:['h1{font-weight: normal;}']
    styleUrls:['./property-card.component.css']
})
export class PorpertyCardComponent{
Property: any={
    "Id":1,
    "Name":"Biral House",
    "Type":"House",
    "Price": 12000
}
}