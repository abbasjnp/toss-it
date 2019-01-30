import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
export interface PeriodicElement {
  id:number;
  location: string;
  shopName: string;
  shopMemberName:string;
  email:string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id:10909,location:'M9876DKDI98', shopName: 'Fruits Shop', shopMemberName:"Abhishek Kumar",email:"abhishekumar124@gmail.com"},
  {id:10909,location:'M9876DKDI98', shopName: 'Fruits Shop', shopMemberName:"Abhishek Kumar",email:"abhishekumar124@gmail.com"},
  {id:10909,location:'M9876DKDI98', shopName: 'Fruits Shop', shopMemberName:"Abhishek Kumar",email:"abhishekumar124@gmail.com"},
  {id:10909,location:'M9876DKDI98', shopName: 'Fruits Shop', shopMemberName:"Abhishek Kumar",email:"abhishekumar124@gmail.com"},
  {id:10909,location:'M9876DKDI98', shopName: 'Fruits Shop', shopMemberName:"Abhishek Kumar",email:"abhishekumar124@gmail.com"},
  {id:10909,location:'M9876DKDI98', shopName: 'Fruits Shop', shopMemberName:"Abhishek Kumar",email:"abhishekumar124@gmail.com"},
  {id:10909,location:'M9876DKDI98', shopName: 'Fruits Shop', shopMemberName:"Abhishek Kumar",email:"abhishekumar124@gmail.com"},
  {id:10909,location:'M9876DKDI98', shopName: 'Fruits Shop', shopMemberName:"Abhishek Kumar",email:"abhishekumar124@gmail.com"},
  {id:10909,location:'M9876DKDI98', shopName: 'Fruits Shop', shopMemberName:"Abhishek Kumar",email:"abhishekumar124@gmail.com"},
  
];

@Component({
  selector: 'app-register-shop',
  templateUrl: './register-shop.component.html',
  styleUrls: ['./register-shop.component.css']
})
export class RegisterShopComponent implements OnInit {
  displayedColumns: string[] = ['id', 'location', 'shopName', 'shopMemberName','email',];
  dataSource = ELEMENT_DATA;

  

  constructor(private router:Router) { }

  ngOnInit() {
  }
  addNewShop(){
    this.router.navigate(['/admin/add-shop']);
    
  }

}
