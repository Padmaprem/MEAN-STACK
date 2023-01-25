import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import { FilterPipe } from './shared/filter.pipe';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { UserlistComponent } from './userlist/userlist.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { AdduserComponent } from './adduser/adduser.component';
import { EdituserComponent } from './edituser/edituser.component';

import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductlistComponent } from './productlist/productlist.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    FilterPipe,
    RegisterComponent,
    LoginComponent,
    UserlistComponent,
    UserdetailsComponent,
    AdduserComponent,
    EdituserComponent,
    AddproductComponent,
    EditproductComponent,
    ProductdetailsComponent,
    ProductlistComponent,


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
