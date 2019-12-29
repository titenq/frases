import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'cadastro', component: CadastroComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'frases',
    loadChildren: () => import('./frases/frases.module').then(mod => mod.FrasesModule)
  },
  {
    path: '', redirectTo: '/frases', pathMatch: 'full'
  },
  {
    path: '**', component: PageNotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
