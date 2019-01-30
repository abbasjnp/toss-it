import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {SharedModule} from './../shared/shared.module';
import { UserComponent } from './user/user.component';
import { CoupanComponent } from './coupan/coupan.component';
import { RegisterShopComponent } from './register-shop/register-shop.component';
import { AllFlayersComponent } from './all-flayers/all-flayers.component';
import { AddFlayerComponent } from './add-flayer/add-flayer.component'
import {AppMaterialModule} from './../app-material/app-material.module'
import { GroceriesComponent } from './all-flayers/groceries/groceries.component';
import { HomeGardensComponent } from './all-flayers/home-gardens/home-gardens.component';
import { AddShopComponent } from './register-shop/add-shop/add-shop.component'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminComponent, UserComponent, CoupanComponent, RegisterShopComponent, AllFlayersComponent, 
                AddFlayerComponent, GroceriesComponent, HomeGardensComponent, AddShopComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  exports:[
  ]
})
export class AdminModule { 
  constructor(){
    console.log('adminModule')
  }
}
