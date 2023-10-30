import { Component } from '@angular/core';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent {


    consulta: string = '';
  
    enviarConsulta() {
      
      const destinatario = 'ezequieldellasanta@hotmail.com.ar';
    

      const asunto = 'Consulta desde la aplicación';
    
    
      const cuerpo = this.consulta; 
    
      console.log(cuerpo);
     
      const enlaceMailto = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;
    
      window.open(enlaceMailto, '_blank');
    }
  


}
