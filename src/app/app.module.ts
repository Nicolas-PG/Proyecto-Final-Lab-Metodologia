import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapaComponent } from './components/mapa/mapa/mapa.component';
import { GoogleMapsService } from './services/google-maps.service';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent
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
