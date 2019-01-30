import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  id:number;
  name: string;
  email:string;
  phoneNumber: number;
  location: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id:10909, name: 'Michal Parulski', email:"michalparaluski0987@gmail.com", phoneNumber:999999,location:'201301(Noida)'},
  {id:10909, name: 'Michal Parulski', email:"michalparaluski0987@gmail.com", phoneNumber:999999,location:'201301(Noida)'},
  {id:10909, name: 'Michal Parulski', email:"michalparaluski0987@gmail.com", phoneNumber:999999,location:'201301(Noida)'},
  {id:10909, name: 'Michal Parulski', email:"michalparaluski0987@gmail.com", phoneNumber:999999,location:'201301(Noida)'},
  {id:10909, name: 'Michal Parulski', email:"michalparaluski0987@gmail.com", phoneNumber:999999,location:'201301(Noida)'},
  {id:10909, name: 'Michal Parulski', email:"michalparaluski0987@gmail.com", phoneNumber:999999,location:'201301(Noida)'},
  {id:10909, name: 'Michal Parulski', email:"michalparaluski0987@gmail.com", phoneNumber:999999,location:'201301(Noida)'},
  {id:10909, name: 'Michal Parulski', email:"michalparaluski0987@gmail.com", phoneNumber:999999,location:'201301(Noida)'},
  {id:10909, name: 'Michal Parulski', email:"michalparaluski0987@gmail.com", phoneNumber:999999,location:'201301(Noida)'},
  {id:10909, name: 'Michal Parulski', email:"michalparaluski0987@gmail.com", phoneNumber:999999,location:'201301(Noida)'},
  {id:10909, name: 'Michal Parulski', email:"michalparaluski0987@gmail.com", phoneNumber:999999,location:'201301(Noida)'},
  {id:10909, name: 'Michal Parulski', email:"michalparaluski0987@gmail.com", phoneNumber:999999,location:'201301(Noida)'},   
 
];

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'phoneNumber','location'];
  dataSource = ELEMENT_DATA;

  constructor() {

   }

  ngOnInit() {
  }

}
