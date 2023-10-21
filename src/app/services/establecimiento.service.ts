import { Injectable, inject } from '@angular/core';
import { Firestore, collection } from '@angular/fire/firestore';
import { Establecimiento } from '../models/establecimiento';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstablecimientoService {

  constructor(private firestore: AngularFirestore) { }

  guardarEstablecimiento(establecimiento: Establecimiento): Promise<any> {
  
   return this.firestore.collection('establecimiento').add(establecimiento); // QUIZAS NO LA USEMOS
  }

  getEstablecimiento(): Observable<Establecimiento[]> {
     return this.firestore.collection<Establecimiento>('establecimientos').valueChanges();
  }
}
