import { Injectable } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {

  private loader: Loader;
  
  
 
  constructor() {
    this.loader = new Loader({
      apiKey: environment.apiKey, 
      version: "weekly"
    });

   }

   cargarMapa(element: HTMLElement, opciones: google.maps.MapOptions): Promise<google.maps.Map>{
    
    return this.loader.importLibrary('maps').then(() =>{
      return new google.maps.Map(element,opciones);  // esta funcion luego se llama en mapa coponent y se le agrega los datos
    });
   }


   




   
}

