import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsFormComponent } from './clients-form/clients-form.component';
import { FormsModule } from '@angular/forms';
import { ClientesListComponent } from './clientes-list/clientes-list.component';

@NgModule({
  declarations: [ClientsFormComponent, ClientesListComponent],
  imports: [CommonModule, ClientsRoutingModule, FormsModule],
  exports: [ClientsFormComponent, ClientesListComponent],
})
export class ClientsModule {}
