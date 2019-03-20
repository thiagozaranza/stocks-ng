import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './modules/layout/root/root.component';
import { EmpresaIndexComponent } from './modules/empresa/empresa-index/empresa-index.component';
import { EmpresaCreateComponent } from './modules/empresa/empresa-create/empresa-create.component';
import { SetorIndexComponent } from './modules/setor/setor-index/setor-index.component';
import { SetorCreateComponent } from './modules/setor/setor-create/setor-create.component';
import { SetorShowComponent } from './modules/setor/setor-show/setor-show.component';
import { SetorEditComponent } from './modules/setor/setor-edit/setor-edit.component';
import { EmpresaShowComponent } from './modules/empresa/empresa-show/empresa-show.component';
import { EmpresaEditComponent } from './modules/empresa/empresa-edit/empresa-edit.component';
import { SubsetorIndexComponent } from './modules/subsetor/subsetor-index/subsetor-index.component';
import { SubsetorShowComponent } from './modules/subsetor/subsetor-show/subsetor-show.component';
import { SegmentoIndexComponent } from './modules/segmento/segmento-index/segmento-index.component';
import { SegmentoShowComponent } from './modules/segmento/segmento-show/segmento-show.component';
import { JoinComponent } from './modules/auth/join/join.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { ForgotComponent } from './modules/auth/forgot/forgot.component';
import { AuthGuardService as AuthGuard } from './modules/auth/auth-guard.service';
import { LandpageComponent } from './modules/pages/landpage/landpage.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { ProfileComponent } from './modules/auth/profile/profile.component';
import { IndiceIndexComponent } from './modules/indice/indice-index/indice-index.component';
import { IndiceShowComponent } from './modules/indice/indice-show/indice-show.component';
import { AtivoIndexComponent } from './modules/ativo/ativo-index/ativo-index.component';
import { AtivoShowComponent } from './modules/ativo/ativo-show/ativo-show.component';
import { TesouroCategoriaIndexComponent } from './modules/tesouro-categoria/tesouro-categoria-index/tesouro-categoria-index.component';
import { TesouroCategoriaShowComponent } from './modules/tesouro-categoria/tesouro-categoria-show/tesouro-categoria-show.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children:  [
      { 
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' 
      },

      { path: 'landpage'          , component: LandpageComponent },

      { path: 'login'             , component: LoginComponent },
      { path: 'join'              , component: JoinComponent },
      { path: 'forgot'            , component: ForgotComponent },

      { path: 'home'              , component: HomeComponent, canActivate: [AuthGuard] }, 
      { path: 'profile'           , component: ProfileComponent, canActivate: [AuthGuard] }, 

      { path: 'empresa'           , component: EmpresaIndexComponent, canActivate: [AuthGuard] }, 
      { path: 'empresa/create'    , component: EmpresaCreateComponent, canActivate: [AuthGuard]  }, 
      { path: 'empresa/:id'       , component: EmpresaShowComponent, canActivate: [AuthGuard] }, 
      { path: 'empresa/:id/edit'  , component: EmpresaEditComponent, canActivate: [AuthGuard] }, 
      
      { path: 'setor'             , component: SetorIndexComponent, canActivate: [AuthGuard] }, 
      { path: 'setor/create'      , component: SetorCreateComponent, canActivate: [AuthGuard] },
      { path: 'setor/:id'         , component: SetorShowComponent, canActivate: [AuthGuard] }, 
      { path: 'setor/:id/edit'    , component: SetorEditComponent, canActivate: [AuthGuard] }, 

      { path: 'subsetor'          , component: SubsetorIndexComponent, canActivate: [AuthGuard] }, 
      { path: 'subsetor/:id'      , component: SubsetorShowComponent, canActivate: [AuthGuard] }, 

      { path: 'segmento'          , component: SegmentoIndexComponent, canActivate: [AuthGuard] }, 
      { path: 'segmento/:id'      , component: SegmentoShowComponent, canActivate: [AuthGuard] },
      
      { path: 'indice'            , component: IndiceIndexComponent, canActivate: [AuthGuard] }, 
      { path: 'indice/:id'        , component: IndiceShowComponent, canActivate: [AuthGuard] },

      { path: 'ativo'             , component: AtivoIndexComponent, canActivate: [AuthGuard] }, 
      { path: 'ativo/:id'         , component: AtivoShowComponent, canActivate: [AuthGuard] },

      { path: 'tesouro-categoria'       , component: TesouroCategoriaIndexComponent, canActivate: [AuthGuard] },
      { path: 'tesouro-categoria/:id'   , component: TesouroCategoriaShowComponent, canActivate: [AuthGuard] }, 

      { path: '**', redirectTo: 'home' },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
