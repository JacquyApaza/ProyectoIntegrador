import { Component, OnInit } from '@angular/core';
import { AccesoBaseService } from '../compartido/acceso-base.service';
import { FuncionesService } from '../compartido/funciones.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})

export class EducationComponent implements OnInit {
  IconoAgrega = "bi bi-file-plus";
  IconoModif ="bi bi-pencil-square";
  IconoEliminar = "bi bi-trash";

  AccesoBD : AccesoBaseService;
  HabilitaObj : FuncionesService;

  constructor( public _accesoBaseService : AccesoBaseService,
               public _habService : FuncionesService ) { 
    this.AccesoBD = _accesoBaseService;
    this.HabilitaObj = _habService;

  }

  

  ngOnInit(): void {
    
  }
}


