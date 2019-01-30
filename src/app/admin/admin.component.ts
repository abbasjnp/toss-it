import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public navs;

  constructor() {
    console.log('adminComponent')
    {
      this.navs = [
        // {
        //   title: 'Dashboard',
        //   url: '/admin/dashboard',
        //   icon: 'glyphicon glyphicon-th-large',
        //   enable: true,
        //   visible: true,
        //   subNavs: []
        // },
        {
          title: 'User',
          //url: '/admin/manage-society',
          icon:'./../../assets/img/user.png',
          enable: true,
          visible: true,
          subNavs: []
        },
        {
          title: 'Coupan',
         // url: '/admin/manage-resident',
          icon: './../../assets/img/coupon.png',
          enable: true,
          visible: true,
          subNavs: []
        },
        {
          title: 'Register Shop',
        //  url: '/admin/manage-employee',
          icon: './../../assets/img/register-shop-copy.png',
          enable: true,
          visible: true,
          subNavs: []
        },
        {
          title: 'All Flyer',
         // url: '/admin/manage-society-admin',
          icon: './../../assets/img/all-flyer.png',
          enable: true,
          visible: true,
          subNavs: [
            {
              title: 'Groceries',
             // url: '/admin/manage-society-admin',
              icon: './../../assets/img/add.png',
              enable: true,
              visible: true,
              subNavs: []
            },
            {
              title: 'Home & Gardens',
             // url: '/admin/manage-society-admin',
              icon: './../../assets/img/add.png',
              enable: true,
              visible: true,
              subNavs: []
            },   
            {
              title: 'Oil & Diesal',
             // url: '/admin/manage-society-admin',
              icon: './../../assets/img/add.png',
              enable: true,
              visible: true,
              subNavs: []
            },        
            {
              title: 'Electronics',
             // url: '/admin/manage-society-admin',
              icon: './../../assets/img/add.png',
              enable: true,
              visible: true,
              subNavs: []
            },   
            {
              title: 'Baby & Kids',
             // url: '/admin/manage-society-admin',
              icon: './../../assets/img/add.png',
              enable: true,
              visible: true,
              subNavs: []
            }, 
            {
              title: 'Fashion',
             // url: '/admin/manage-society-admin',
              icon: './../../assets/img/add.png',
              enable: true,
              visible: true,
              subNavs: []
            },                       
          ]
        }, 
        {
          title: 'Add Flyer',
         // url: '/admin/manage-society-admin',
          icon: './../../assets/img/add.png',
          enable: true,
          visible: true,
          subNavs: []
        },              
  
      ];
    }
   }

  ngOnInit() {
  }

}
