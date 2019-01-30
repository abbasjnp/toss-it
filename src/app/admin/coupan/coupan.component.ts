import { Component, OnInit } from '@angular/core';
export interface coupanDetail{
  url:string;
  savePercentage:string;
  coupanDetail:string;
  matchAt:string;
}


@Component({
  selector: 'app-coupan',
  templateUrl: './coupan.component.html',
  styleUrls: ['./coupan.component.css']
})
export class CoupanComponent implements OnInit {
  coupans:coupanDetail[]=[
    {url:'./../../../assets/img/discount.jpg',savePercentage:'10%',coupanDetail:'Now extended store is orgaincie fruits and vegetables',matchAt:'Walmart'},
    {url:'./../../../assets/img/discount.jpg',savePercentage:'10%',coupanDetail:'Now extended store is orgaincie fruits and vegetables',matchAt:'Walmart'},
    {url:'./../../../assets/img/discount.jpg',savePercentage:'10%',coupanDetail:'Now extended store is orgaincie fruits and vegetables',matchAt:'Walmart'},
    {url:'./../../../assets/img/discount.jpg',savePercentage:'10%',coupanDetail:'Now extended store is orgaincie fruits and vegetables',matchAt:'Walmart'},
    {url:'./../../../assets/img/discount.jpg',savePercentage:'10%',coupanDetail:'Now extended store is orgaincie fruits and vegetables',matchAt:'Walmart'},
    {url:'./../../../assets/img/discount.jpg',savePercentage:'10%',coupanDetail:'Now extended store is orgaincie fruits and vegetables',matchAt:'Walmart'},
    {url:'./../../../assets/img/discount.jpg',savePercentage:'10%',coupanDetail:'Now extended store is orgaincie fruits and vegetables',matchAt:'Walmart'},
    {url:'./../../../assets/img/discount.jpg',savePercentage:'10%',coupanDetail:'Now extended store is orgaincie fruits and vegetables',matchAt:'Walmart'},
    {url:'./../../../assets/img/discount.jpg',savePercentage:'10%',coupanDetail:'Now extended store is orgaincie fruits and vegetables',matchAt:'Walmart'},
    {url:'./../../../assets/img/discount.jpg',savePercentage:'10%',coupanDetail:'Now extended store is orgaincie fruits and vegetables',matchAt:'Walmart'},

    
  ]

  constructor() { 
    console.log('coupan');
  }

  ngOnInit() {
  }

}
