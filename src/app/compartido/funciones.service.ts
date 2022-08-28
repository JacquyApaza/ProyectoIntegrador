import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionesService {
  Habilitar( cObjeto : string ) : void{
    (<HTMLInputElement> document.getElementById( cObjeto ) ).disabled = !( (<HTMLInputElement> document.getElementById( cObjeto ) ).disabled );    
  }
  constructor() { }
}
