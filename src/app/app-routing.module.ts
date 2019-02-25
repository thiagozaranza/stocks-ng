import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './layout/root/root.component';
import { EmpresaIndexComponent } from './modules/empresa/empresa-index/empresa-index.component';
import { EmpresaCreateComponent } from './modules/empresa/empresa-create/empresa-create.component';
import { SetorIndexComponent } from './modules/setor/setor-index/setor-index.component';
import { SetorCreateComponent } from './modules/setor/setor-create/setor-create.component';

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
        component: SetorIndexComponent
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
