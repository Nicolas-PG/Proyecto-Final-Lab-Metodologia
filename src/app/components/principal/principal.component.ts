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
  userInfo

 

  constructor(private authService: AuthService, private router: Router) {

    this.router.events.subscribe((event) =>{
      if(event instanceof NavigationEnd){
        this.mostrarFiltro = this.router.url === '/inicio';
      }
    })

    this.isLoggedIn = authService.isLoggedIn;
    this.userInfo = authService.userData;

    console.log("aca")
    console.log(this.userInfo);
  }

  logOut() {
    this.authService.logOut();
  }

  


}
