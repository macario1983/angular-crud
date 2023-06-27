import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDisciplinaComponent } from './list-disciplina/list-disciplina.component';
import { FormDisciplinaComponent } from './form-disciplina/form-disciplina.component';

const routes: Routes = [
  { path: '', component: ListDisciplinaComponent },
  { path: 'add', component: FormDisciplinaComponent },
  { path: 'edit', component: FormDisciplinaComponent },
  { path: 'list', component: ListDisciplinaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisciplinaRoutingModule { }
