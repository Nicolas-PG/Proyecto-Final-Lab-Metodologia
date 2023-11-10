import { Component, Input, OnInit } from '@angular/core';
import { GoogleMapsService } from 'src/app/services/google-maps.service';
import { EstablecimientoComponent } from '../../establecimiento/establecimiento.component';
import { Establecimiento } from 'src/app/models/establecimiento';
import { EstablecimientoService } from 'src/app/services/establecimiento.service';
import { EventService } from 'src/app/services/event-service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  private mapa?: google.maps.Map;
  private botonUbicacion?: HTMLButtonElement;
  private establecimientos: Establecimiento[] = [];
  private categoriaSeleccionada: string = '';

  constructor(
    private googleMapsService:GoogleMapsService,
    private establecimientoService: EstablecimientoService,
    private eventService: EventService
    ){ }

  ngOnInit(): void {
    
    
    const mapElement = document.getElementById('map');

    this.googleMapsService.cargarMapa(mapElement as HTMLElement, {
      center:{lat:-38.005614285436465, lng:-57.54347888235542}, 
      zoom:14,
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
        
        this.actualizarMarcadores();
      })
    });

    this.eventService.categoriaSeleccionada$.subscribe(categoria => {
      this.categoriaSeleccionada = categoria;
      this.actualizarMarcadores();
    });
    

  }

  filtrarPorCategoria(categoria: string): void {
    this.categoriaSeleccionada = categoria;
    
    this.actualizarMarcadores(); 
  }

  
  actualizarMarcadores(): void {
    if(this.mapa){
      
      this.googleMapsService.agregarMarcadores(this.establecimientos, this.mapa, this.categoriaSeleccionada);
    }
    
  }

}


