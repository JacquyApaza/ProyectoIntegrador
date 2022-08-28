import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  imgPerfil = '../../assets/Imagenes/yo.jpg';
  Nombre="Jacqueline";
  Puesto="Programadora, Diseñadora, Freelance, Fotógrafa";

  constructor() { }

  ngOnInit(): void {

  }

}
