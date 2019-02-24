import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaIndexComponent } from './empresa-index/empresa-index.component';
import { EmpresaCreateComponent } from './empresa-create/empresa-create.component';

@NgModule({
  declarations: [
    EmpresaIndexComponent,
    EmpresaCreateComponent],
  imports: [
    CommonModule
  ]
})
export class EmpresaModule { }
