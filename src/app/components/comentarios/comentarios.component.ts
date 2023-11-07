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
  
   
      this.comentarioData.comentario=this.newComment;
      if (this.user.photoURL) {
        this.comentarioData.url = this.user.photoURL;
      } else {
        
        this.comentarioData.url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6DvZYTn07oaUANbmmZPCgDVL7xeTInBZIuY5yXZQ7KgacmaMlczodfhedAwhGHf3moeE&usqp=CAU';
      }

      if (this.user.displayName) {
        this.comentarioData.nombre = this.user.displayName;
      } else {
 
        this.comentarioData.nombre = 'MorfoUsario';
      }
  

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