import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',loadChildren:'./admin/admin.module#AdminModule'},
 // {path:'',redirectTo:'/admin',pathMatch:'full'}
  
  
  
  // loadChildren: './customers/customers.module#CustomersModule'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
