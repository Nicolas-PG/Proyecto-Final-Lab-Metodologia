import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaComponent } from './components/mapa/mapa/mapa.component';
import { LoginComponent } from './components/autenticacion/login/login.component';
import { DashboardComponent } from './components/autenticacion/dashboard/dashboard.component';
import { SignUpComponent } from './components/autenticacion/sign-up/sign-up.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { PrincipalComponent } from './components/principal/principal.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { EstablecimientoComponent } from './components/establecimiento/establecimiento.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';


const routes: Routes = [
  { path: 'inicio', component: MapaComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignUpComponent },
  { path:'contactos',component:ContactosComponent},
  { path:'principal',component:PrincipalComponent},
  { path:'establecimiento',component:EstablecimientoComponent},
  { path:'comentarios',component:ComentariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
