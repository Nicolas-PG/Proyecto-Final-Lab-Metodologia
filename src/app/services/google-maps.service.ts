import { Injectable } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { map } from 'rxjs';
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



  // ESTA FUNCION CREA UN BOTON QUE DESPLIEGA UN INFOWINDOW PARA PERMITIR ENCONTRAR LA UBICACION ACTUAL Y POSICIONCARSE EN EL MAPA

    botonGeolocalizacion(map: google.maps.Map): HTMLButtonElement{
      const locationButton = document.createElement("button");
      locationButton.textContent = "Deslplazarse a la ubicación actual";
      locationButton.classList.add("btn-map-location");

      map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

      locationButton.addEventListener("click", () => {
      
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position: GeolocationPosition) => {
              const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };
    
              const infoWindow = new google.maps.InfoWindow;
              infoWindow.setPosition(pos);
              infoWindow.setContent("Ubicacion encontrada.");
              infoWindow.open(map);
              map.setCenter(pos);
            },
            () => {
              this.handleLocationError(true, map);
            }
          );
        } else {
          
          this.handleLocationError(false, map);
        }
      });

      return locationButton;
    }

    // ESTA FUNCION MANEJA LOS CASOS DE ERRORES DE LA FUNCION DE GEOLOCALIZACION
    private handleLocationError(browserHasGeolocation: boolean, map:google.maps.Map):void {

      const infoWindow = new google.maps.InfoWindow();
      infoWindow.setPosition(map.getCenter()!);

      infoWindow.setContent(
        browserHasGeolocation
        ?"El servicio de geolocalizacion fallo"
        :"El buscador no soporta geolocalizacion"
      );
        infoWindow.open(map);

    }
    
   

   

  }
