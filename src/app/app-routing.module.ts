import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './layout/index/index.component';
import { PessoasListComponent } from './component/pessoas/pessoas-list/pessoas-list.component';
import { PessoasdetailsComponent } from './component/pessoas/pessoasdetails/pessoasdetails.component';
import { CarroslistComponent } from './component/carros/carroslist/carroslist.component';
import { CarrosdetailsComponent } from './component/carros/carrosdetails/carrosdetails.component';
import { LoginComponent } from './sistema/login/login.component';
import { LivroslistComponent } from './component/livros/livroslist/livroslist.component';
import { LivrosdetailsComponent } from './component/livros/livrosdetails/livrosdetails.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: IndexComponent,
    children: [
      { path: 'pessoas', component: PessoasListComponent },
      { path: 'pessoas/novo', component: PessoasdetailsComponent },
      { path: 'pessoas/editar/:id', component: PessoasdetailsComponent },
      { path: 'carros', component: CarroslistComponent },
      { path: 'carros/novo', component: CarrosdetailsComponent },
      { path: 'carros/editar/id', component: CarrosdetailsComponent },
      { path: 'livros', component: LivroslistComponent },
      { path: 'livros/novo', component: LivrosdetailsComponent },
      { path: 'livro/editar/:id', component: LivrosdetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
