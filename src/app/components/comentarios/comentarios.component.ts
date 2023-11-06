import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent {
  comments: string[] = [];
  newComment: string = '';
 

  isLoggedIn: boolean;
  mostrarFiltro: boolean = false;

  addComment() {
    if (this.newComment) {
      this.comments.push(this.newComment);
      this.newComment = ''; 
    }
  }


  constructor(private authService: AuthService) {

    this.isLoggedIn = authService.isLoggedIn;
  }







}
