import { Component, OnInit } from '@angular/core';
import { FuncionesService } from '../compartido/funciones.service';
import * as AOS from 'aos';

// Importo el archivo JSON 
import DatosDeMi from 'src/assets/Json/datos.json';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  IconoModif = "bi bi-pencil-fill";
  IconoDerecha = "bi bi-caret-right";
  
  funciones : any;

  // Exporto los datos del archivo JSON a la  vista 
  DatosMios : any = DatosDeMi;
 
  constructor( _funciones : FuncionesService ) { 
    this.funciones = _funciones;  
  }

  Habilitar( cObjetoId : string ){
     this.funciones.Habilitar( cObjetoId );
  }

  ngOnInit(): void {
    AOS.init( {
      duration: 1200,
      delay: 200,
      once: true
    });
     AOS.refresh();
    
    // Desactivo los input
    this.Habilitar( "txtAcercaDeMi01" );
    this.Habilitar( "txtTituloRecibido" );
    this.Habilitar( "txtCumple" );
    this.Habilitar( "txtWebsite" );
    this.Habilitar( "txtTelefono" );

    this.Habilitar( "txtCiudad" );
    this.Habilitar( "txtAnios" );
    this.Habilitar( "txtGrado" );
    this.Habilitar( "txtEmail" );
    this.Habilitar( "txtProvincia" );
    
    
    

    
  }

}
