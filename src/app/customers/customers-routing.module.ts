import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { CustomersFormComponent } from './customers-form/customers-form.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'new', component: CustomersFormComponent },
  { path: 'edit/:id', component: CustomersFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {}
