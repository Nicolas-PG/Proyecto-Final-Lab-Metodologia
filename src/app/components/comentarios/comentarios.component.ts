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
      const currentDate = new Date();
      const commentDate = currentDate.toLocaleDateString(); 
      
      const fullComment = `${commentDate}\n${this.newComment}`;
  
      
      const newCommentData: ComentarioData = {
        url: this.user.photoURL || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6DvZYTn07oaUANbmmZPCgDVL7xeTInBZIuY5yXZQ7KgacmaMlczodfhedAwhGHf3moeE&usqp=CAU',
        nombre: this.user.displayName || 'MorfoUsario',
        comentario: fullComment
      };
  
      
      this.comments.push(newCommentData);
  
      
      this.newComment = '';
    }
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