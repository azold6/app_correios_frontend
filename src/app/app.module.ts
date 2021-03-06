import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from '../services/storage.service';
import { EncomendaService } from '../services/encomendas.service';
import { LoginService } from '../services/login.service';
import { ClienteService } from '../services/cliente.service';
import { EncomendaDetailsPage } from '../pages/encomenda-details/encomenda-details';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EncomendaDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EncomendaDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginService,
    HttpClientModule,
    StorageService,
    EncomendaService,
    ClienteService
  ]
})
export class AppModule {}
