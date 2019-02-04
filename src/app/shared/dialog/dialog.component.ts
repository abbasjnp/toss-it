import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import {Location} from '@angular/common'
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any,
              public location:Location) { console.log(data)}

  closeDialog(){
    this.dialogRef.close('pizza');
  }
  close():void{
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
