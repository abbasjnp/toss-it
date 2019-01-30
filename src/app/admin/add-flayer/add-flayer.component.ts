import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import {FormBuilder} from '@angular/forms';
import{Validators} from '@angular/forms';
import{Location} from '@angular/common';
import {CommonService} from './../../shared/service/common.service'

@Component({
  selector: 'app-add-flayer',
  templateUrl: './add-flayer.component.html',
  styleUrls: ['./add-flayer.component.css']
})
export class AddFlayerComponent implements OnInit {
  urlsFlyer = [];
  urlsMatchUP =[];

  constructor(private fb:FormBuilder,
              private location:Location,
              private commonService:CommonService) { }

  ngOnInit() {
  }

  addFlyer=this.fb.group({
    flyerName : ['',Validators.required],
    untilDay : ['',Validators.required],
    startDate : ['',Validators.required],
    endDate : ['',Validators.required],
    uploadFlyerImage :['',Validators.required],
    uploadMatchupImage :['',Validators.required]

  })
  days: string[] = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', ];

    uploadFlyerImage(event) {
      if (event.target.files && event.target.files[0]) {
          var filesAmount = event.target.files.length;
          for (let i = 0; i < filesAmount; i++) {
                  var reader = new FileReader();
  
                  reader.onload = (event) => {
                    console.log(event.target.result);
                     this.urlsFlyer.push(event.target.result); 
                  }
  
                  reader.readAsDataURL(event.target.files[i]);
          }
      }
    }
    uploadMatchupImage(event) {
      if (event.target.files && event.target.files[0]) {
          var filesAmount = event.target.files.length;
          for (let i = 0; i < filesAmount; i++) {
                  var reader = new FileReader();
  
                  reader.onload = (event) => {
                    console.log(event.target.result);
                     this.urlsMatchUP.push(event.target.result); 
                  }
  
                  reader.readAsDataURL(event.target.files[i]);
          }
      }
    }
    onSubmit(){
      console.log(this.addFlyer.value);
      this.commonService.showMessage('Successfully added the flyer');
      this.location.back();
    }
    cancel(){
      this.location.back();
    }
    
}
