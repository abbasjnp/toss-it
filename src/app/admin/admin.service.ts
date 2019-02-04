import { Injectable } from '@angular/core';
import {of} from 'rxjs';
import { fromEventPattern } from 'rxjs';
export interface PeriodicElement {
  id:number;
  location: string;
  shopName: string;
  shopMemberName:string;
  email:string;
 
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {
    ELEMENT_DATA: PeriodicElement[] = [
    {id:10909,location:'M9876DKDI98', shopName: 'Fruits Shop', shopMemberName:"Abhishek Kumar",email:"abhishekumar124@gmail.com"},
    {id:55555,location:'M9876DKDI98', shopName: 'Fruits Shop', shopMemberName:"Abhishek Kumar",email:"abhishekumar124@gmail.com"},
    {id:10909,location:'M9876DKDI98', shopName: 'Fruits Shop', shopMemberName:"Abhishek Kumar",email:"abhishekumar124@gmail.com"},
    {id:10909,location:'M9876DKDI98', shopName: 'Fruits Shop', shopMemberName:"Abhishek Kumar",email:"abhishekumar124@gmail.com"},
    {id:10909,location:'M9876DKDI98', shopName: 'Fruits Shop', shopMemberName:"Abhishek Kumar",email:"abhishekumar124@gmail.com"},
    {id:10909,location:'M9876DKDI98', shopName: 'Fruits Shop', shopMemberName:"Abhishek Kumar",email:"abhishekumar124@gmail.com"},
    {id:10909,location:'M9876DKDI98', shopName: 'Fruits Shop', shopMemberName:"Abhishek Kumar",email:"abhishekumar124@gmail.com"},
    {id:10909,location:'M9876DKDI98', shopName: 'Fruits Shop', shopMemberName:"Abhishek Kumar",email:"abhishekumar124@gmail.com"},
    {id:10909,location:'M9876DKDI98', shopName: 'Fruits Shop', shopMemberName:"Abhishek Kumar",email:"abhishekumar124@gmail.com"},
    
  ];

  getShopDetail(id:number){
    return (this.ELEMENT_DATA.find(shop =>shop.id===id))
  
}

  constructor() { }
}
