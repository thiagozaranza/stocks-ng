import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaIndexComponent } from './empresa-index/empresa-index.component';
import { EmpresaCreateComponent } from './empresa-create/empresa-create.component';
import { EmpresaEditComponent } from './empresa-edit/empresa-edit.component';
import { EmpresaShowComponent } from './empresa-show/empresa-show.component';

@NgModule({
  declarations: [
    EmpresaIndexComponent,
    EmpresaCreateComponent,
    EmpresaEditComponent,
    EmpresaShowComponent],
  imports: [
    CommonModule
  ]
})
export class EmpresaModule { }
