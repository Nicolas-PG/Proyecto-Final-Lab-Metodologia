import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/models/comentario';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ComentariosService } from 'src/app/services/comentarios/comentarios.service';



@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit{
  comentarios: Comentario[] = [];
  newComment: string = '';
  comentarioData: Comentario = {
    id:'',
    url: '',
    nombre: '',
    comentario: '',
    fecha:''
  };
 

  isLoggedIn?: boolean;
  mostrarFiltro: boolean = false;
  user


  
  constructor(private authService: AuthService, private comentariosService: ComentariosService) {

    this.isLoggedIn = authService.isLoggedIn;
    this.user=JSON.parse(localStorage.getItem('user')!);

  
  }
  ngOnInit(): void {
    this.comentariosService.getComentarios()
    .subscribe(comentarios => {
      this.comentarios = comentarios;
    });
    
  }

  

  addComment() {
    if (this.newComment) {
      const currentDate = new Date();
      const commentDate = currentDate.toLocaleDateString(); 
      
  
      
      const newCommentData: Comentario = {
        id:'',
        url: this.user.photoURL || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6DvZYTn07oaUANbmmZPCgDVL7xeTInBZIuY5yXZQ7KgacmaMlczodfhedAwhGHf3moeE&usqp=CAU',
        nombre: this.user.displayName || 'MorfoUsario',
        comentario: this.newComment,
        fecha:commentDate
      };
  
      this.comentariosService.guardarComentario(newCommentData)
      .then(response =>{
        console.log("Comentario guardado", response)
      })
      .catch(error =>{
        console.log("Error al guardar el comentario", error);
      });
      
  
      
      this.newComment = '';
    }
  }

}