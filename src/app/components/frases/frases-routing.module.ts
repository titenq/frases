import { AuthGuard } from './../../auth/auth.guard';
import { FrasesComponent } from './frases/frases.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routesFrases: Routes = [
  { path: '', component: FrasesComponent },
  { path: ':id', component: FrasesComponent, canActivate: [AuthGuard]/*, resolve: {usuario: UsuarioResolverService}*/ }
]

@NgModule({
  imports: [RouterModule.forChild(routesFrases)],
  exports: [RouterModule]
})
export class FrasesRoutingModule { }
