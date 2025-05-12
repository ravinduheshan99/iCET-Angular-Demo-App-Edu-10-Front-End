import { NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, HttpClientModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  constructor(private http:HttpClient){

  }

  //NIC_REGEX1 = /[0-9]{9}[XxVv]/;
  //NIC_REGEX2 = /[0-9]{9}[XxVv][e]/;
  //nicValue: string = '';

  productForm = new FormGroup({
    name: new FormControl("Name", [Validators.required, Validators.maxLength(10), Validators.minLength(3)]),
    description: new FormControl("", [Validators.required]),
    price: new FormControl(0, Validators.required),
    //email: new FormControl("", Validators.pattern(/\@{1}/)),
    //nic: new FormControl("", Validators.pattern(this.NIC_REGEX1))

  })

  submit() {
    //show overall status with validations in the form
    console.log(this.productForm);

    if (this.productForm.invalid) {
      return;
    }

    this.http.post("http://localhost:8080/product",this.productForm.value).subscribe(data=>{
      console.log(data)
    })

  }

  reset(){
    this.productForm.reset()
    this.productForm.setValue({
      name:"",
      description:"",
      price:0
    })
  }

  /*
  onNicInput(event: Event): void {
  const inputElement = event.target as HTMLInputElement;
  this.nicValue = inputElement.value;
}


  isValidNic(value: string): boolean {
    return this.NIC_REGEX2.test(value); 
  }
  
  */
  
}
