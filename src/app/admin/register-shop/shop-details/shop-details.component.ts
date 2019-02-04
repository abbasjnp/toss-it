import { Component, OnInit,Input} from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import{AdminService} from './../../admin.service'
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css']
})
export class ShopDetailsComponent implements OnInit {
  public shopData;
  constructor(private route:ActivatedRoute,
              private adminService:AdminService,
              private router:Router
              ){ }

  ngOnInit() {
    this.getShopDetails();
  }
  getShopDetails(){
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
      this.shopData= this.adminService.getShopDetail(id);
      
  }
  onSumbit(){
        this.router.navigate(['/admin/register-shop/change-password'])
  }

}
