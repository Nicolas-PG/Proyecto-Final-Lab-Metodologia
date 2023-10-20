import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapaComponent } from './components/mapa/mapa/mapa.component';
import { GoogleMapsService } from './services/google-maps.service';
import { EstablecimientoComponent } from './components/establecimiento/establecimiento.component'; 
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment.development';
import { FirestoreModule } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    EstablecimientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    
    
  ],
  providers: [
    GoogleMapsService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
