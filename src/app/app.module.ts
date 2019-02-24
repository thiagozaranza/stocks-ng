import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaModule } from './empresa/empresa.module';
import { SetorModule } from './setor/setor.module';
import { SubsetorModule } from './subsetor/subsetor.module';
import { SegmentoModule } from './segmento/segmento.module';
import { LayoutModule } from './layout/layout.module';


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
    SegmentoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
