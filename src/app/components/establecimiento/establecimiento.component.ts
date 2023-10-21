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

  constructor(private establecimientoService : EstablecimientoService){}

  ngOnInit(): void {
    this.establecimientoService.getEstablecimiento().subscribe(establecimientos => {
      this.establecimientos = establecimientos;
    })
  }

}
