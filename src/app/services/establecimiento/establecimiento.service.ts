import { Injectable, inject } from '@angular/core';
import { Firestore, collection } from '@angular/fire/firestore';
import { Establecimiento } from 'src/app/models/establecimiento'; 
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Storage } from '@angular/fire/storage';
import { getDownloadURL, ref } from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class EstablecimientoService {

  constructor(private firestore: AngularFirestore, private storage: Storage = inject(Storage)) { }

  
  guardarEstablecimiento(establecimiento: Establecimiento): Promise<any> {
  
   return this.firestore.collection('establecimiento').add(establecimiento); // QUIZAS NO LA USEMOS
  }

  getEstablecimiento(): Observable<Establecimiento[]> {
    
     return this.firestore.collection<Establecimiento>('Establecimientos').valueChanges();
     
     
  }

  

  getImagenes(rutaImagen: string):Promise<string>{
    const storageRef = ref(this.storage, rutaImagen);
    return getDownloadURL(storageRef);
  
  }
  
  

  getEstablecimientosConIds(): Observable<any[]> {
    return this.firestore.collection('Establecimientos').snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(action => {
            const data = action.payload.doc.data() as Establecimiento;
            const id = action.payload.doc.id;
            return {...data, id };
          });
        })
      );
  }

}
