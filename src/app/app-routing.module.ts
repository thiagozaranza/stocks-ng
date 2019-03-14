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
import { AuthGuardService as AuthGuard } from './modules/auth/auth-guard.service';

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
      { path: 'login'             , component: LoginComponent },
      { path: 'join'              , component: JoinComponent },
      { path: 'forgot'            , component: ForgotComponent },

      { path: 'empresa'           , component: EmpresaIndexComponent, canActivate: [AuthGuard] }, 
      { path: 'empresa/create'    , component: EmpresaCreateComponent, canActivate: [AuthGuard]  }, 
      { path: 'empresa/:id'       , component: EmpresaShowComponent, canActivate: [AuthGuard] }, 
      { path: 'empresa/:id/edit'  , component: EmpresaEditComponent, canActivate: [AuthGuard] }, 
      
      { path: 'setor'             , component: SetorIndexComponent, canActivate: [AuthGuard] }, 
      { path: 'setor/create'      , component: SetorCreateComponent, canActivate: [AuthGuard] },
      { path: 'setor/:id'         , component: SetorShowComponent, canActivate: [AuthGuard] }, 
      { path: 'setor/:id/edit'    , component: SetorEditComponent, canActivate: [AuthGuard] }, 

      { path: 'subsetor'          , component: SubsetorIndexComponent, canActivate: [AuthGuard] }, 
      { path: 'subsetor/create'   , component: SubsetorCreateComponent, canActivate: [AuthGuard] },
      { path: 'subsetor/:id'      , component: SubsetorShowComponent, canActivate: [AuthGuard] }, 
      { path: 'subsetor/:id/edit' , component: SubsetorEditComponent, canActivate: [AuthGuard] }, 

      { path: 'segmento'          , component: SegmentoIndexComponent, canActivate: [AuthGuard] }, 
      { path: 'segmento/create'   , component: SegmentoCreateComponent, canActivate: [AuthGuard] },
      { path: 'segmento/:id'      , component: SegmentoShowComponent, canActivate: [AuthGuard] }, 
      { path: 'segmento/:id/edit' , component: SegmentoEditComponent, canActivate: [AuthGuard] }, 
      { path: '**', redirectTo: 'login' },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
