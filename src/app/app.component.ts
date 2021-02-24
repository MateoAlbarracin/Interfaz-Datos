import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'dlr-proyect';

  model:any = {};
  fila:any = {};
  hide:boolean = true

  constructor(){
    this.datas = [
      {endpoint:"UD", metodo:"UD", seguridad:"UD", tabla:"UD", properties:[
        { endpoint:'UD', metodo:'UD', propiedad:'UD', columna:'UD', requerido:'UD', tipo:'UD'}
      ]}
    ]
  }

  addData():void{
    this.model = {endpoint:"UD", metodo:"UD", seguridad:"UD", tabla:"UD",properties:[]};
    this.datas.push(this.model);
    console.log()
  };

  deleteData(i):void{
    this.datas.splice(i, 1);
  };

  addProperties(value:Endpoint):void{
    this.fila = {endpoint:"UD", metodo:"UD", propiedad:"UD", columna:"UD", requerido:"UD", tipo:"UD"};
    value.properties.push(this.fila)
  };

  deleteProperties(value2:Endpoint, value:EndpointProperties):void{
    let propiedades:EndpointProperties[] = []
    value2.properties.forEach(k => {
      if (value != k){
        propiedades.push(k)
      }
    })
    value2.properties = propiedades
  };

  showTable(i):void{
    this.hide = false;
    
  }

  hideTable(i):void{
    this.hide = true
    
  }

  datas:Endpoint[]
  

}

interface Endpoint{
  endpoint:string,  metodo:string, seguridad:string, tabla:string,
  properties:EndpointProperties[]
};

interface EndpointProperties{
  endpoint:string, metodo:string, propiedad:string, columna:string, requerido:string, tipo:string
}
