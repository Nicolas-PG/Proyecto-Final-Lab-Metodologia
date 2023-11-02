import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  isLoggedIn: boolean;
  mostrarFiltro: boolean = false;


  constructor(private authService: AuthService, private router: Router) {

    this.router.events.subscribe((event) =>{
      if(event instanceof NavigationEnd){
        this.mostrarFiltro = this.router.url === '/inicio';
      }
    })

    this.isLoggedIn = authService.isLoggedIn;
  }

  logOut() {
    this.authService.logOut();
  }

  


}
