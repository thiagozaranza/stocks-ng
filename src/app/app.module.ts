import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresaModule } from './modules/empresa/empresa.module';
import { SetorModule } from './modules/setor/setor.module';
import { SubsetorModule } from './modules/subsetor/subsetor.module';
import { SegmentoModule } from './modules/segmento/segmento.module';
import { LayoutModule } from './modules/layout/layout.module'; 
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { GlobalApp } from './shared/global';
import { AuthModule } from './modules/auth/auth.module';
import { AuthInterceptor } from './modules/auth/auth.interceptor';
import { JwtModule } from '@auth0/angular-jwt';
import { PagesModule } from './modules/pages/pages.module';
import { IndiceModule } from './modules/indice/indice.module';
import { AtivoModule } from './modules/ativo/ativo.module';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}


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
    IndiceModule,
    AtivoModule,
    PagesModule,
    AuthModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
      }
    })
  ],
  providers: [
    GlobalApp,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
