import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAlunoComponent } from './form-aluno/form-aluno.component';
import { ListAlunoComponent } from './list-aluno/list-aluno.component';

const routes: Routes = [
  { path: 'add', component: FormAlunoComponent },
  { path: 'edit', component: FormAlunoComponent },
  { path: 'list', component: ListAlunoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunoRoutingModule {}
