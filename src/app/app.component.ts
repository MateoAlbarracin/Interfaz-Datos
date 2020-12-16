import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'dlr-proyect';

  data = [
    {endpoint:"UD", metodo:"UD", seguridad:"UD", tabla:"UD"}
  ];

  properties = [
    {endpoint:"UD", metodo:"UD", propiedad:"UD", columna:"UD", requerido:"UD", tipo:"UD"}
  ]

  model:any = {};
  model2:any = {}
  hide:boolean = true

  addData():void{
    this.model = {endpoint:"UD", metodo:"UD", seguridad:"UD", tabla:"UD"};
    this.data.push(this.model);
  };

  deleteData(i):void{
    this.data.splice(i, 1);
  };

  addProperties():void{
    this.model2 = {endpoint:"UD", metodo:"UD", propiedad:"UD", columna:"UD", requerido:"UD", tipo:"UD"};
    this.properties.push(this.model2);
  };

  deleteProperties(i):void{
    this.properties.splice(i, 1);
  };

  showTable():void{
    this.hide = false;
  }
  hideTable():void{
    this.hide = true
  }
}
