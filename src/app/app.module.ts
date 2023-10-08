import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './layout/index/index.component';
import { PessoasListComponent } from './component/pessoas/pessoas-list/pessoas-list.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { CarroslistComponent } from './component/carros/carroslist/carroslist.component';
import { CarrosdetailsComponent } from './component/carros/carrosdetails/carrosdetails.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LivroslistComponent } from './component/livros/livroslist/livroslist.component';
import { LivrosdetailsComponent } from './component/livros/livrosdetails/livrosdetails.component';
import { PessoasdetailsComponent } from './component/pessoas/pessoasdetails/pessoasdetails.component';
import { LoginComponent } from './sistema/login/login.component';
import { FormsModule } from '@angular/forms';
import { TabelaComponent } from './component/tabela/tabela.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PessoasListComponent,
    HeaderComponent,
    FooterComponent,
    CarroslistComponent,
    CarrosdetailsComponent,
    LivroslistComponent,
    LivrosdetailsComponent,
    PessoasdetailsComponent,
    LoginComponent,
    TabelaComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
