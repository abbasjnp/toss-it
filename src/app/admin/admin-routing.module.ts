import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserComponent } from './user/user.component';
import { CoupanComponent } from './coupan/coupan.component';
import { RegisterShopComponent } from './register-shop/register-shop.component';
import { AllFlayersComponent } from './all-flayers/all-flayers.component';
import { AddFlayerComponent } from './add-flayer/add-flayer.component';
import { GroceriesComponent } from './all-flayers/groceries/groceries.component';
import { HomeGardensComponent } from './all-flayers/home-gardens/home-gardens.component';
import { AddShopComponent } from './register-shop/add-shop/add-shop.component';
import { ShopDetailsComponent } from './register-shop/shop-details/shop-details.component';
import { ChangePasswordComponent } from './register-shop/change-password/change-password.component';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {path:'user',component:UserComponent},
      {path:'coupan',component:CoupanComponent},
      {path:'register-shop',component:RegisterShopComponent},
      {path:'all-flayers',component:AllFlayersComponent,
        children:[
              {path:'groceries',component:GroceriesComponent},
              {path:'',redirectTo:'/groceries',pathMatch:'full'},
              {path:'home-garden',component:HomeGardensComponent},

            
        ]
      },
      {path:'add-flayer',component:AddFlayerComponent},
      {path:'add-shop',component:AddShopComponent},
      {path:'register-shop/shop-details/:id',component:ShopDetailsComponent},
      {path:'register-shop/change-password',component:ChangePasswordComponent}
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { 
  constructor(){
    console.log('adminRouting')
  }
}
