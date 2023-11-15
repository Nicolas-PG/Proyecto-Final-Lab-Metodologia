import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { EventService } from 'src/app/services/events/event-service';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  isLoggedIn: boolean;
  mostrarFiltro: boolean = false;
  userInfo

  

 

  constructor(private authService: AuthService, private router: Router, private eventService: EventService) {

    this.router.events.subscribe((event) =>{
      if(event instanceof NavigationEnd){
        this.mostrarFiltro = this.router.url === '/inicio';
      }
    })

    this.isLoggedIn = authService.isLoggedIn;
    this.userInfo = authService.userData;

    
    console.log(this.userInfo);
  }

  logOut() {
    this.authService.logOut();
  }

  onCategoriaSeleccionada(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const categoria = selectElement.value;
    this.eventService.emitirCategoriaSeleccionada(categoria)
    
  }

  


}
