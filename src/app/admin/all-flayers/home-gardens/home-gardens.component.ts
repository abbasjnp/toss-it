import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-gardens',
  templateUrl: './home-gardens.component.html',
  styleUrls: ['./home-gardens.component.css']
})
export class HomeGardensComponent implements OnInit {
  values=[];
  constructor() { }

  ngOnInit() {
  }
  onKey(value:any){
    if(value)
    this.values.push(value);
  }

 
}
