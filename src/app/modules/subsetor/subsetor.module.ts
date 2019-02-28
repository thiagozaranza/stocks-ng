import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubsetorIndexComponent } from './subsetor-index/subsetor-index.component';
import { SubsetorCreateComponent } from './subsetor-create/subsetor-create.component';
import { SubsetorEditComponent } from './subsetor-edit/subsetor-edit.component';
import { SubsetorShowComponent } from './subsetor-show/subsetor-show.component';

@NgModule({
  declarations: [SubsetorIndexComponent, SubsetorCreateComponent, SubsetorEditComponent, SubsetorShowComponent],
  imports: [
    CommonModule
  ]
})
export class SubsetorModule { }
