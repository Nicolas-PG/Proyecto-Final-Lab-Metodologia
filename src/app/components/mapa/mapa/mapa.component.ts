import { Component, OnInit } from '@angular/core';
import { GoogleMapsService } from 'src/app/services/google-maps.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  private mapa?: google.maps.Map;

  constructor(private googleMapsService:GoogleMapsService){
    
  }

  ngOnInit(): void {
    
    const mapElement = document.getElementById('map');

    this.googleMapsService.cargarMapa(mapElement as HTMLElement, {
      center:{lat:-38.005614285436465, lng:-57.54347888235542}, 
      zoom:13
    
    }).then(mapa => {
      this.mapa = mapa;
    });

  }

}