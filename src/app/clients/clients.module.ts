import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsFormComponent } from './clients-form/clients-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClientsFormComponent],
  imports: [CommonModule, ClientsRoutingModule, FormsModule],
  exports: [ClientsFormComponent],
})
export class ClientsModule {}
