import { Component, OnInit } from '@angular/core';
import { AccesoBaseService } from '../compartido/acceso-base.service';

@Component({
  selector: 'app-barra-login',
  templateUrl: './barra-login.component.html',
  styleUrls: ['./barra-login.component.css']
})
export class BarraLoginComponent implements OnInit {
  IconoEntrar = "bi bi-box-arrow-in-right";
  IconoSalir = "bi bi-box-arrow-left";

  constructor( public accesoBD : AccesoBaseService ) { }

  ngOnInit(): void {
    //this.accesoBD.getUsuarios();
  }

}
