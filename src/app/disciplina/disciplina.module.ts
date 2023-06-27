import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisciplinaRoutingModule } from './disciplina-routing.module';
import { FormDisciplinaComponent } from '../aluno/form-disciplina/form-disciplina.component';
import { ListDisciplinaComponent } from './list-disciplina/list-disciplina.component';


@NgModule({
  declarations: [
    FormDisciplinaComponent,
    ListDisciplinaComponent
  ],
  imports: [
    CommonModule,
    DisciplinaRoutingModule
  ]
})
export class DisciplinaModule { }
