import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapaComponent } from './components/mapa/mapa/mapa.component';
import { GoogleMapsService } from './services/google-maps.service';
import { EstablecimientoComponent } from './establecimiento/establecimiento/establecimiento.component';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    EstablecimientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    GoogleMapsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
