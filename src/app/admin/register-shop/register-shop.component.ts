import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import{AdminService} from './../admin.service'




@Component({
  selector: 'app-register-shop',
  templateUrl: './register-shop.component.html',
  styleUrls: ['./register-shop.component.css']
})
export class RegisterShopComponent implements OnInit {
  constructor(private router:Router,private adminService:AdminService) { }

  displayedColumns: string[] = ['id', 'location', 'shopName', 'shopMemberName','email','action'];
  dataSource = this.adminService.ELEMENT_DATA
  data;

  

 
  ngOnInit() {
  }
  addNewShop(){
    this.router.navigate(['/admin/add-shop']);
    
  }
  deleteShop(element){
     this.data=element;
     console.log(this.data,"ddddddddd");
     this.router.navigate(['/admin/register-shop/shop-details',element.id]) 
  }
 
  // navigate(){
  //   this.router.navigate(['/admin/register-shop/shop-details']) 
  // }

}
