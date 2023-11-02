import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  isLoggedIn: boolean;


  constructor(private authService: AuthService) {


    this.isLoggedIn = authService.isLoggedIn;
  }

  logOut() {
    this.authService.logOut();
  }

  


}
