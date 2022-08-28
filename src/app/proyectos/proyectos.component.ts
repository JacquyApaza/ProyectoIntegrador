import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  IconoAgrega = "bi bi-file-plus";
  IconoModif ="bi bi-pencil-square";
  IconoEliminar = "bi bi-trash";

  constructor() { }

  ngOnInit(): void {
  }

}
