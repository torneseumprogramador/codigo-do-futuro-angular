import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './paginas/contact-list/contact-list.component';
import { FormComponent } from './paginas/form/form.component';
import { HomeComponent } from './paginas/home/home.component';
import { LoginComponent } from './paginas/login/login.component';
import { NaoEncontradaComponent } from './paginas/nao-encontrada/nao-encontrada.component';
import { PortfolioComponent } from './paginas/portfolio/portfolio.component';
import { SobreComponent } from './paginas/sobre/sobre.component';
import { AutenticadoGuard } from './servicos/autenticado.guard';
import { FormLeaveGuard } from './servicos/form-leave.guard';
import { PermicaoEdicaoGuard } from './servicos/permicao-edicao.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'portfolio', component: PortfolioComponent, canActivate: [AutenticadoGuard] },
  { path: 'sobre', component: SobreComponent },
  { 
    path: 'form', 
    component: FormComponent,
    canActivate: [AutenticadoGuard],
    canDeactivate: [FormLeaveGuard]
  },
  { 
    path: 'form/:id',
    canActivateChild: [PermicaoEdicaoGuard],
    children: [
      { path: '', redirectTo: 'alterar', pathMatch: 'full' },
      {
        path: 'alterar',
        component: FormComponent,
        canDeactivate: [FormLeaveGuard],
      }
    ]
  },
  //{ path: 'form-alterar/:id', component: FormComponent, canActivate: [AutenticadoGuard] },
  { path: 'contatos', component: ContactListComponent, canActivate: [AutenticadoGuard] },
  { path: '**', component: NaoEncontradaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
