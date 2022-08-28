import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css']
})
export class NavegadorComponent implements OnInit {
  Nombre : string = "Jacquy";

  IconoTwitter = "bi bi-twitter";
  IconoFacebook = "bi bi-facebook";
  IconoInstagram = "bi bi-instagram";
  IconoSkype = "bi bi-skype";
  IconoLinkedin = "bi bi-linkedin";

  IconoHome = "bi bi-house-door";
  IconoPersona = "bi bi-person";
  IconoCV = "bi bi-file-earmark";
  IconoExperiencia = "bi bi-window-split";
  IconoServicios = "bi bi-menu-button-wide-fill";
  IconoMail = "bi bi-envelope";
  
  constructor(  ) { }

  ngOnInit(): void {    
  }
}
