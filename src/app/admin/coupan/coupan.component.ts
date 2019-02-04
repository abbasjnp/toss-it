import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material'; 
import {DialogComponent} from './../../shared/dialog/dialog.component'
export interface coupanDetail{
  url:string;
  savePercentage:string;
  coupanDetail:string;
  matchAt:string;
  startDate:Date;
  endDate:Date;
}


@Component({
  selector: 'app-coupan',
  templateUrl: './coupan.component.html',
  styleUrls: ['./coupan.component.css']
})
export class CoupanComponent implements OnInit {
  coupans:coupanDetail[]=[
    {url:'./../../../assets/img/discount.jpg',savePercentage:'10%',coupanDetail:'Now extended store is orgaincie fruits and vegetables',matchAt:'Walmart',startDate:new Date(2,1,2019),endDate:new Date(2,3,2019)},
    {url:'./../../../assets/img/discount.jpg',savePercentage:'10%',coupanDetail:'Now extended store is orgaincie fruits and vegetables',matchAt:'Walmart',startDate:new Date(2,1,2019),endDate:new Date(2,3,2019)},
    {url:'./../../../assets/img/discount.jpg',savePercentage:'10%',coupanDetail:'Now extended store is orgaincie fruits and vegetables',matchAt:'Walmart',startDate:new Date(2,1,2019),endDate:new Date(2,3,2019)},
    {url:'./../../../assets/img/discount.jpg',savePercentage:'10%',coupanDetail:'Now extended store is orgaincie fruits and vegetables',matchAt:'Walmart',startDate:new Date(2,1,2019),endDate:new Date(2,3,2019)},
    {url:'./../../../assets/img/discount.jpg',savePercentage:'10%',coupanDetail:'Now extended store is orgaincie fruits and vegetables',matchAt:'Walmart',startDate:new Date(2,1,2019),endDate:new Date(2,3,2019)},
    {url:'./../../../assets/img/discount.jpg',savePercentage:'10%',coupanDetail:'Now extended store is orgaincie fruits and vegetables',matchAt:'Walmart',startDate:new Date(2,1,2019),endDate:new Date(2,3,2019)},
    {url:'./../../../assets/img/discount.jpg',savePercentage:'10%',coupanDetail:'Now extended store is orgaincie fruits and vegetables',matchAt:'Walmart',startDate:new Date(2,1,2019),endDate:new Date(2,3,2019)},
    {url:'./../../../assets/img/discount.jpg',savePercentage:'10%',coupanDetail:'Now extended store is orgaincie fruits and vegetables',matchAt:'Walmart',startDate:new Date(2,1,2019),endDate:new Date(2,3,2019)},
    {url:'./../../../assets/img/discount.jpg',savePercentage:'10%',coupanDetail:'Now extended store is orgaincie fruits and vegetables',matchAt:'Walmart',startDate:new Date(2,1,2019),endDate:new Date(2,3,2019)},
    {url:'./../../../assets/img/discount.jpg',savePercentage:'10%',coupanDetail:'Now extended store is orgaincie fruits and vegetables',matchAt:'Walmart',startDate:new Date(2,1,2019),endDate:new Date(2,3,2019)},

    
  ]

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }
  openDialog(selectedCoupan:any){
    let coupan=selectedCoupan;
    var dialogRef = this.dialog.open(DialogComponent, {
      width: '700px',
      height:'600px',
      data: coupan
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  }


