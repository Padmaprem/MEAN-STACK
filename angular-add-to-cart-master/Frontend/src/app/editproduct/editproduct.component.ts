import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

    //form declared
    product: Product = new Product();
    id!: string | null;
    productForm!: FormGroup;
    submitted: boolean = false;
    //builder dependency injected through constructor
    constructor(private builder: FormBuilder, 
      private service: ProductService,private router:Router,private route:ActivatedRoute) { }
  
    ngOnInit(): void {
      this.id=this.route.snapshot.paramMap.get('id');
      this.service.getProductById(String(this.id)).subscribe(x=>this.product=x);
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
        this.service.editProduct(this.product,String(this.id)).subscribe(x=>console.log(x));
        this.router.navigate(['productlist']);
      }
    }

}


  
