
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  product: Product = new Product();
  productForm!: FormGroup;
  submitted: boolean = false;

  constructor(private builder: FormBuilder, 

    private service: ProductService,private router:Router) { }
  ngOnInit(): void {
    this.productForm = this.builder.group({
      strImage: ['', Validators.required],
      strName: ['', Validators.required],
      strdescription: ['', Validators.required],
      intPrice: ['', Validators.required],

    })
  }
  get form() {
    return this.productForm.controls;
  }

  onSubmit(){
    this.submitted=true;
    if(this.productForm.invalid)
    return;
    else{
      console.log(this.product)
      this.service.addProduct(this.product).subscribe((x: any)=>console.log(x));
        alert("Product Registered Successfully");
      this.router.navigate(['productlist']);
    }
  }
}




