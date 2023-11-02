import { Component, OnInit } from '@angular/core';
import { Establecimiento } from 'src/app/models/establecimiento';
import { EstablecimientoService } from 'src/app/services/establecimiento.service';

@Component({
  selector: 'app-establecimiento',
  templateUrl: './establecimiento.component.html',
  styleUrls: ['./establecimiento.component.css']
})
export class EstablecimientoComponent implements OnInit {

   establecimientos: any[] = [];

   establecimientosPruebaFront: any[] = [
    {nombre:'Banderita', direccion: 'Guemes 2000', img:'https://banderitaparrilla.com/wp-content/uploads/2021/12/DSC_4561.jpg'},
    {nombre:'Antares', direccion: 'Olavarria 2000', img:'https://media-cdn.tripadvisor.com/media/photo-s/19/8e/4e/f9/frente-local-antares.jpg'},
    {nombre:'Cafe Martinez', direccion: 'Cordoba 2000', img:'https://www.equipamientoyservicios.com.ar/wp-content/uploads/2021/06/CAFE-MARTINEZ-OLIVOS-DSC_0613-800-X-510.jpg'},
    {nombre:'Borneo', direccion: 'Moreno 2000', img:'https://www.borneobrewingco.com.ar/wp-content/uploads/2022/10/Nurien-00680.jpg'},
    {nombre:'Parliamo', direccion: 'Rivadavia 2000', img:'https://parliamopizza.com/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-27-at-10.56.15-1.jpeg'}
   ]

  constructor(private establecimientoService : EstablecimientoService){}

  ngOnInit(): void {
    this.establecimientoService.getEstablecimiento().subscribe(establecimientos => {
      this.establecimientos = establecimientos; // FUNCION SIN USO POR AHORA PORQUE SE UTILIZA LA DEL SERVICE
    })
  }

}
