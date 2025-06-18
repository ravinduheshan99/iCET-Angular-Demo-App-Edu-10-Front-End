import { NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import * as AOS from 'aos';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, HttpClientModule, MatInputModule, MatIconModule, MatCheckboxModule, MatProgressSpinnerModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent implements OnInit{

  public isNetworkingRequestPending:boolean = false;

  constructor(private http:HttpClient){
    console.log(http);
  }

  ngOnInit(): void{
    AOS.init({
      duration:500
    })
  }


  productForm = new FormGroup({
    name: new FormControl("Name", [Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
    description: new FormControl("", [Validators.required]),
    price: new FormControl(0, Validators.required),
  })

  submit() {
    //show overall status with validations in the form
    console.log(this.productForm);

    if (this.productForm.invalid) {
      return;
    }

    this.isNetworkingRequestPending=true;
    this.productForm.disable();

    this.http.post("http://localhost:8080/product",this.productForm.value).subscribe(
      (respones)=>{
        console.log(respones)
        this.isNetworkingRequestPending=false;
        this.productForm.enable();
      },

      (error)=>{
        console.error(error)
        this.isNetworkingRequestPending=false;
        this.productForm.enable();
      }
    )
  }

  reset(){
    this.productForm.reset()
    this.productForm.setValue({
      name:"",
      description:"",
      price:0
    })
  }
}

