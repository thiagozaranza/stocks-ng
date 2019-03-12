import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LOCAL_STORAGE, WebStorageService, StorageServiceModule } from 'angular-webstorage-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaModule } from './modules/empresa/empresa.module';
import { SetorModule } from './modules/setor/setor.module';
import { SubsetorModule } from './modules/subsetor/subsetor.module';
import { SegmentoModule } from './modules/segmento/segmento.module';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http'; 
import { GlobalApp } from './shared/global';
import { AuthModule } from './modules/auth/auth.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    LayoutModule,
    EmpresaModule,
    SetorModule,
    SubsetorModule,
    SegmentoModule,
    AuthModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
    StorageServiceModule
  ],
  providers: [
    GlobalApp
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
