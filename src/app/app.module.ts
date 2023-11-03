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
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { EstablecimientoService } from './services/establecimiento.service';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/compat/storage';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './components/autenticacion/sign-up/sign-up.component';
import { DashboardComponent } from './components/autenticacion/dashboard/dashboard.component';
import { LoginComponent } from './components/autenticacion/login/login.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { getStorage, provideStorage } from '@angular/fire/storage';






@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    EstablecimientoComponent,
    LoginComponent,
    SignUpComponent,
    DashboardComponent,
    ContactosComponent,
    PrincipalComponent,
    ComentariosComponent
   
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    

    
    
   
   
    
  ],
  providers: [
    GoogleMapsService,
    EstablecimientoService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
