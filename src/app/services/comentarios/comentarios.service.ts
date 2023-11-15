import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Comentario } from 'src/app/models/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private firestore: AngularFirestore) { }

  guardarComentario(comentario: Comentario): Promise<any> {
  
    return this.firestore.collection('Comentarios').add(comentario);
   }

   getComentarios(): Observable<Comentario[]> {
    
    return this.firestore.collection<Comentario>('Comentarios').valueChanges();
    
    
 }
}
