import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing.module';
import { ListAlunoComponent } from '../aluno/list-aluno/list-aluno.component';


@NgModule({
  declarations: [
    ListAlunoComponent
  ],
  imports: [
    CommonModule,
    AlunoRoutingModule
  ]
})
export class AlunoModule { }
