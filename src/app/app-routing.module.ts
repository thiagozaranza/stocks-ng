import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './layout/root/root.component';
import { EmpresaIndexComponent } from './modules/empresa/empresa-index/empresa-index.component';
import { EmpresaCreateComponent } from './modules/empresa/empresa-create/empresa-create.component';
import { SetorIndexComponent } from './modules/setor/setor-index/setor-index.component';
import { SetorCreateComponent } from './modules/setor/setor-create/setor-create.component';
import { SetorShowComponent } from './modules/setor/setor-show/setor-show.component';
import { SetorEditComponent } from './modules/setor/setor-edit/setor-edit.component';
import { EmpresaShowComponent } from './modules/empresa/empresa-show/empresa-show.component';
import { EmpresaEditComponent } from './modules/empresa/empresa-edit/empresa-edit.component';
import { SubsetorIndexComponent } from './modules/subsetor/subsetor-index/subsetor-index.component';
import { SubsetorCreateComponent } from './modules/subsetor/subsetor-create/subsetor-create.component';
import { SubsetorShowComponent } from './modules/subsetor/subsetor-show/subsetor-show.component';
import { SubsetorEditComponent } from './modules/subsetor/subsetor-edit/subsetor-edit.component';
import { SegmentoIndexComponent } from './modules/segmento/segmento-index/segmento-index.component';
import { SegmentoCreateComponent } from './modules/segmento/segmento-create/segmento-create.component';
import { SegmentoShowComponent } from './modules/segmento/segmento-show/segmento-show.component';
import { SegmentoEditComponent } from './modules/segmento/segmento-edit/segmento-edit.component';
import { JoinComponent } from './modules/auth/join/join.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { ForgotComponent } from './modules/auth/forgot/forgot.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children:  [
      { 
        path: '', 
        redirectTo: 'login', 
        pathMatch: 'full' 
      },
      { path: 'login'             , component: LoginComponent },
      { path: 'join'              , component: JoinComponent },
      { path: 'forgot'            , component: ForgotComponent },

      { path: 'empresa'           , component: EmpresaIndexComponent }, 
      { path: 'empresa/create'    , component: EmpresaCreateComponent }, 
      { path: 'empresa/:id'       , component: EmpresaShowComponent}, 
      { path: 'empresa/:id/edit'  , component: EmpresaEditComponent}, 
      
      { path: 'setor'             , component: SetorIndexComponent}, 
      { path: 'setor/create'      , component: SetorCreateComponent},
      { path: 'setor/:id'         , component: SetorShowComponent}, 
      { path: 'setor/:id/edit'    , component: SetorEditComponent}, 

      { path: 'subsetor'          , component: SubsetorIndexComponent}, 
      { path: 'subsetor/create'   , component: SubsetorCreateComponent},
      { path: 'subsetor/:id'      , component: SubsetorShowComponent}, 
      { path: 'subsetor/:id/edit' , component: SubsetorEditComponent}, 

      { path: 'segmento'          , component: SegmentoIndexComponent}, 
      { path: 'segmento/create'   , component: SegmentoCreateComponent},
      { path: 'segmento/:id'      , component: SegmentoShowComponent}, 
      { path: 'segmento/:id/edit' , component: SegmentoEditComponent}, 
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
