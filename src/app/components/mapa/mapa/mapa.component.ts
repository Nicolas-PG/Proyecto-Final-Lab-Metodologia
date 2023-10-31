import { Component, OnInit } from '@angular/core';
import { GoogleMapsService } from 'src/app/services/google-maps.service';
import { EstablecimientoComponent } from '../../establecimiento/establecimiento.component';
import { Establecimiento } from 'src/app/models/establecimiento';
import { EstablecimientoService } from 'src/app/services/establecimiento.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  private mapa?: google.maps.Map;
  private botonUbicacion?: HTMLButtonElement;
  private establecimientos: Establecimiento[] = [];

  constructor(
    private googleMapsService:GoogleMapsService,
    private establecimientoService: EstablecimientoService
    ){ }

  ngOnInit(): void {
    
    const mapElement = document.getElementById('map');

    this.googleMapsService.cargarMapa(mapElement as HTMLElement, {
      center:{lat:-38.005614285436465, lng:-57.54347888235542}, 
      zoom:13,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
      ],
    
    }).then(mapa => {
      this.mapa = mapa;
      this.botonUbicacion = this.googleMapsService.botonGeolocalizacion(mapa);
      
      this.establecimientoService.getEstablecimiento().subscribe((establecimientos) => {

        this.establecimientos = establecimientos;
        
        this.googleMapsService.agregarMarcadores(this.establecimientos, mapa);
      })
    });

  }

}
