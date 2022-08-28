import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccesoBaseService {
  Agregar() : void { 
    alert( "Agregar BD" );

  }

  constructor()  { }

  getUsuarios(){}
}
