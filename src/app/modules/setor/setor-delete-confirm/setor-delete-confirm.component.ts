import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Setor } from '../setor';

@Component({
  selector: 'app-setor-delete-confirm',
  templateUrl: './setor-delete-confirm.component.html',
  styleUrls: ['./setor-delete-confirm.component.scss']
})
export class SetorDeleteConfirmComponent {

  constructor(
    public dialogRef: MatDialogRef<SetorDeleteConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Setor) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(): void {
    this.dialogRef.close();
  }
}
