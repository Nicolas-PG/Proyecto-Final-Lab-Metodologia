import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private categoriaSeleccionadaSubject = new Subject<string>();

  categoriaSeleccionada$ = this.categoriaSeleccionadaSubject.asObservable();
  
  emitirCategoriaSeleccionada(categoria: string): void {
    this.categoriaSeleccionadaSubject.next(categoria);
  }

    

  constructor() { }
}
