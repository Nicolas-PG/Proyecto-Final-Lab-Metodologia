import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent {
  comments: ComentarioData[] = [];
  newComment: string = '';
  comentarioData: ComentarioData = {
    url: '',
    nombre: '',
    comentario: ''
  };
 

  isLoggedIn: boolean;
  mostrarFiltro: boolean = false;
  user


  addComment() {
    if (this.newComment) {
  
      this.comentarioData.url = this.user.photoURL;
      this.comentarioData.nombre = this.user.displayName;
      this.comentarioData.comentario=this.newComment;
  

      this.comments.push(this.comentarioData);
  

      this.comentarioData = {
        url: '',
        nombre: '',
        comentario: ''
      }}
  }


  constructor(private authService: AuthService) {

    this.isLoggedIn = authService.isLoggedIn;
  this.user=JSON.parse(localStorage.getItem('user')!);
  }


 




}


interface ComentarioData {
  url: string;
  nombre: string;
  comentario: string;
}