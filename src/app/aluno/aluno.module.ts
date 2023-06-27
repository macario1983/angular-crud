import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing.module';
import { ListAlunoComponent } from '../aluno/list-aluno/list-aluno.component';
import { FormAlunoComponent } from './form-aluno/form-aluno.component';


@NgModule({
  declarations: [
    ListAlunoComponent,
    FormAlunoComponent
  ],
  imports: [
    CommonModule,
    AlunoRoutingModule
  ]
})
export class AlunoModule { }
