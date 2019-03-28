import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import { CommonService } from 'src/app/shared/service/common.service';
import {Location} from '@angular/common'

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private location:Location,
              private commonService:CommonService ) {  }
  cpForm =new FormGroup({
    newPassword : new FormControl(''),
    cPassword: new FormControl('')
  })
  onSubmit(){
    console.log(this.cpForm.value);
    this.commonService.showMessage('Password Change SuccessFully!!!!1');
    this.location.back();

  }
  goBack(){
    this.location.back();
  }

  ngOnInit() {
  }

}
