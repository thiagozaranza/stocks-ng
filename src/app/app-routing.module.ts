import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './layout/root/root.component';
import { EmpresaIndexComponent } from './modules/empresa/empresa-index/empresa-index.component';
import { EmpresaCreateComponent } from './modules/empresa/empresa-create/empresa-create.component';
import { SetorIndexComponent } from './modules/setor/setor-index/setor-index.component';
import { SetorCreateComponent } from './modules/setor/setor-create/setor-create.component';
import { SetorShowComponent } from './modules/setor/setor-show/setor-show.component';
import { SetorEditComponent } from './modules/setor/setor-edit/setor-edit.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children:  [
      { 
        path: '', 
        redirectTo: 'setor', 
        pathMatch: 'full' 
      },
      {
        path: 'empresa',
        component: EmpresaIndexComponent
      }, {
        path: 'empresa/create',
        component: EmpresaCreateComponent
      }, {
        path: 'setor',
        component: SetorIndexComponent,        
      }, {
        path: 'setor/:id',
        component: SetorShowComponent,        
      }, {
        path: 'setor/:id/edit',
        component: SetorEditComponent,        
      }, {
        path: 'setor/create',
        component: SetorCreateComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
