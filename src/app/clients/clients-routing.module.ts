import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsFormComponent } from './clients-form/clients-form.component';
import { ClientesListComponent } from './clientes-list/clientes-list.component';

const routes: Routes = [
  { path: 'client-form', component: ClientsFormComponent },
  { path: 'clients-list', component: ClientesListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
