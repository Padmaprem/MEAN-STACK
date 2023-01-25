import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserlistComponent } from './userlist/userlist.component';

import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductlistComponent } from './productlist/productlist.component';



const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },

  {path:"list",component:UserlistComponent},
  {path:"adduser",component:AdduserComponent},
  {path:"user-details/:id",component:UserdetailsComponent},
  {path:"edit/:id",component:EdituserComponent},

  
  {path:"productlist",component:ProductlistComponent},
  {path:"addproduct",component:AddproductComponent},
  {path:"product-details/:id",component:ProductdetailsComponent},
  {path:"editproduct/:id",component:EditproductComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
