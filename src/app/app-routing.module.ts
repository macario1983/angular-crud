import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'aluno',
    loadChildren: () =>
      import('./aluno/aluno-routing.module').then((m) => m.AlunoRoutingModule),
  },
  {
    path: 'disciplina',
    loadChildren: () =>
      import('./disciplina/disciplina-routing.module').then(
        (m) => m.DisciplinaRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
