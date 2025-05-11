import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-product',
    imports: [ReactiveFormsModule, NgIf],
    templateUrl: './product.component.html',
    styleUrl: './product.component.css'
})
export class ProductComponent {

  productForm = new FormGroup({
    name: new FormControl("Name",[Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
    description: new FormControl("",[Validators.required]),
    price: new FormControl(0,Validators.required)
  })

  submit(){
    //show overall status with validations in the form
    console.log(this.productForm);
    
    if(this.productForm.status=='INVALID'){
      return;
    }

    //API Call
  }

}
