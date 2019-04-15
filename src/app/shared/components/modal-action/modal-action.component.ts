import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-action',
  templateUrl: './modal-action.component.html',
  styleUrls: ['./modal-action.component.scss']
})
export class ModalActionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalActionComponent>, @Inject(MAT_DIALOG_DATA) public data) 
  { 
    
  }

  ngOnInit() {
  }

}
