import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin, switchMap } from 'rxjs';
import { Establecimiento } from 'src/app/models/establecimiento';
import { EstablecimientoService } from 'src/app/services/establecimiento/establecimiento.service';

@Component({
  selector: 'app-establecimiento',
  templateUrl: './establecimiento.component.html',
  styleUrls: ['./establecimiento.component.css']
})
export class EstablecimientoComponent implements OnInit {

   establecimientos: any[] = [];
   imagenUrl?: string;


  constructor(private establecimientoService : EstablecimientoService){}

  ngOnInit(): void {
    
    this.establecimientoService.getEstablecimientosConIds()
      .subscribe(establecimientos => {
        this.establecimientos = establecimientos.filter(establecimiento => 
          establecimiento.redes && Object.keys(establecimiento.redes).length > 0
        );
        this.establecimientos.forEach(establecimiento =>{

            console.log(establecimiento.redes )
          const rutaImagen = `locales/${establecimiento.id}.jpg`;
          const rutaSinExtension = rutaImagen.replace(/^locales\//, '').replace(/\.jpg$/, '');
    
          
          this.establecimientoService.getImagenes(rutaImagen)
          .then((url: string | null )=> {
            if(url !== null && establecimiento.id === rutaSinExtension){
              establecimiento.imagenUrl = url;
              
              console.log(establecimiento)
            }else {
              console.log('La ruta de la imagen no coincide con la ID del establecimiento.');
            }
            
          })
          .catch((error: any )=> {
            console.error('Error al obtener la URL de la imagen:', error);
          });
          
        })
        
        
      });

      
  }

  redirectToUrl(url: string): void {
    window.open(url, '_blank');
  }

  
  

}
