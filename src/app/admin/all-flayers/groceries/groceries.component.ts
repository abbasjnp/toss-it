import { Component, OnInit } from '@angular/core';
export interface FeaturedCoupans{
  url:string;
}
export interface LatestCoupans{
  url:string;
}

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {

featuredCoupans:FeaturedCoupans[]=[
  {url:'./../../../assets/img/discount.jpg'},
  {url:'./../../../assets/img/discount.jpg'},
  {url:'./../../../assets/img/discount.jpg'},
  {url:'./../../../assets/img/discount.jpg'},
]
latestCoupans:LatestCoupans[]=[
  {url:'./../../../assets/img/latest.jpg'},
  {url:'./../../../assets/img/latest.jpg'},
  {url:'./../../../assets/img/latest.jpg'},
  {url:'./../../../assets/img/latest.jpg'},
]


  constructor() { }

  ngOnInit() {
  }

}
