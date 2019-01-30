import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { Location } from '@angular/common';
import { CommonService } from './../../../shared/service/common.service'

@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.css']
})
export class AddShopComponent implements OnInit {
 
  addShopForm = new FormGroup({
     shopName : new FormControl('',[Validators.required]),
     shopMemberName: new FormControl('',[Validators.required]),
     email : new FormControl('',[Validators.required,Validators.email]),
     zipCode : new FormControl('',[Validators.required])
  })
  getErrorMessage() {
    return this.addShopForm.get('email').hasError('required') ? 'You must enter a value' :
        this.addShopForm.get('email').hasError('email') ? 'Not a valid email' :
            '';
  }
  constructor(private location:Location,private commonService:CommonService) { }
  onSubmit(){
    console.log(this.addShopForm.value);
    this.location.back();
    this.commonService.showMessage("Shop Added Successfully");
  }
  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
  }

}
