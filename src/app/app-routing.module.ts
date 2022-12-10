import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEditarPersonaComponent } from './components/agregar-editar-persona/agregar-editar-persona.component';
import { ListadoPersonaComponent } from './components/listado-persona/listado-persona.component';
import { VerPersonaComponent } from './components/ver-persona/ver-persona.component';

//componentes

const routes: Routes = [
{path: '', redirectTo: 'tercerParcial', pathMatch: 'full' },
{ path:'tercerParcial', component:ListadoPersonaComponent },
{ path:'agregarDatos', component:AgregarEditarPersonaComponent },
{ path:'verDatos/:id', component:VerPersonaComponent },
{ path:'editarDatos/:id', component: AgregarEditarPersonaComponent },
{ path:'**', redirectTo: 'tercerParcial', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
