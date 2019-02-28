import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegmentoCreateComponent } from './segmento-create/segmento-create.component';
import { SegmentoShowComponent } from './segmento-show/segmento-show.component';
import { SegmentoEditComponent } from './segmento-edit/segmento-edit.component';
import { SegmentoIndexComponent } from './segmento-index/segmento-index.component';

@NgModule({
  declarations: [SegmentoCreateComponent, SegmentoShowComponent, SegmentoEditComponent, SegmentoIndexComponent],
  imports: [
    CommonModule
  ]
})
export class SegmentoModule { }
