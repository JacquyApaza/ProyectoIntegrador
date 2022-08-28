import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { EducationComponent } from './education/education.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

import { AccesoBaseService } from './compartido/acceso-base.service';
import { FuncionesService } from './compartido/funciones.service';
import { NavegadorComponent } from './navegador/navegador.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { BarraLoginComponent } from './barra-login/barra-login.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { SkillsComponent } from './skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    EducationComponent,
    ProyectosComponent,
    NavegadorComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    BarraLoginComponent,
    CurriculumComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AccesoBaseService, FuncionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
