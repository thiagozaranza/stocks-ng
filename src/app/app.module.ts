import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaModule } from './modules/empresa/empresa.module';
import { SetorModule } from './modules/setor/setor.module';
import { SubsetorModule } from './modules/subsetor/subsetor.module';
import { SegmentoModule } from './modules/segmento/segmento.module';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http'; 
import { GlobalApp } from './shared/global';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    EmpresaModule,
    SetorModule,
    SubsetorModule,
    SegmentoModule,
    HttpClientModule
  ],
  providers: [
    GlobalApp
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
