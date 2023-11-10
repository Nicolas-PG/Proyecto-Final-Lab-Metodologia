import { Injectable } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Establecimiento } from '../models/establecimiento';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {

  private loader: Loader;
  private marcadores: google.maps.Marker[] = [];



  constructor() {
    this.loader = new Loader({
      apiKey: environment.apiKey,
      version: "weekly"
    });

  }

  cargarMapa(element: HTMLElement, opciones: google.maps.MapOptions): Promise<google.maps.Map> {

    return this.loader.importLibrary('maps').then(() => {
      return new google.maps.Map(element, opciones);  // esta funcion luego se llama en mapa coponent y se le agrega los datos
    });
  }



  // ESTA FUNCION CREA UN BOTON QUE DESPLIEGA UN INFOWINDOW PARA PERMITIR ENCONTRAR LA UBICACION ACTUAL Y POSICIONCARSE EN EL MAPA

  botonGeolocalizacion(map: google.maps.Map): HTMLButtonElement {
    const locationButton = document.createElement("button");
    locationButton.textContent = "Mi ubicación";
    locationButton.classList.add("btn-map-location");
    locationButton.style.backgroundColor = "white";
    locationButton.style.color = "black";
    locationButton.style.padding = "4px 5px";
    locationButton.style.border = "none";
    locationButton.style.borderRadius = "5px";
    locationButton.style.cursor = "pointer";
    locationButton.style.fontSize = "15px";
    locationButton.style.fontWeight = "bold";

    map.controls[google.maps.ControlPosition.INLINE_END_BLOCK_START].push(locationButton);

    locationButton.addEventListener("click", () => {

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position: GeolocationPosition) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };


            const marker = new google.maps.Marker({
              position: {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              },
              map: map,
              title: "Mi ubicación"
            });

            marker.addListener('click', function () {

              marker.setMap(null);
            });

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
  private handleLocationError(browserHasGeolocation: boolean, map: google.maps.Map): void {

    const infoWindow = new google.maps.InfoWindow();
    infoWindow.setPosition(map.getCenter()!);

    infoWindow.setContent(
      browserHasGeolocation
        ? "El servicio de geolocalizacion fallo"
        : "El buscador no soporta geolocalizacion"
    );
    infoWindow.open(map);

  }

  agregarMarcadores(establecimientos: any[], mapa: google.maps.Map, categoriaFiltro?: string): void {

    this.limpiarMarcadores();
    var iconBase = 'assets/images/';
    establecimientos.forEach(establecimiento => {
      if (!categoriaFiltro || categoriaFiltro === 'todo' || establecimiento.categorias.includes(categoriaFiltro)) {

        const marker = new google.maps.Marker({
          position: { lat: establecimiento.latitud, lng: establecimiento.longitud },
          map: mapa,
          title: establecimiento.nombre,
          icon: iconBase + this.tipoEstablecimiento(establecimiento)


        });

        const menuUrl = establecimiento.menu;

        const infoWindowContentent = `
        <div style="width: 300px; height: 450px;">
        <strong>${establecimiento.nombre}</strong><br>
        ${establecimiento.direccion}<br>
        <iframe src="${menuUrl}" width="300" height="400" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
        <br>
        <a href="${menuUrl}" target="_blank">Ver Menú</a>
        </div>
      `;

        const infoWindow = new google.maps.InfoWindow({
          content: infoWindowContentent
        });

        marker.addListener('click', () => {
          infoWindow.open(mapa, marker);
        });
        this.marcadores.push(marker);
      }
      

    });

  }
  private limpiarMarcadores(): void {
    for (const marker of this.marcadores) {
      marker.setMap(null);
    }
    
    this.marcadores = [];
  }



  private tipoEstablecimiento(establecimiento: any): string {
    const categorias = establecimiento.categorias

    for (let i = 0; i < categorias.length; i++) {
      const categoria = categorias[i];
      switch (categoria) {
        case 'cafe':
          return 'markCafe.png';

        case 'hamburguesa':
          return 'markBurger.png';

        case 'restaurante':
          return 'markPasta.png';

      }

    }
    return "...";

  }



}
