import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-buttons',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-buttons.component.html',
  styleUrl: './user-buttons.component.css'
})
export class UserButtonsComponent {
  @Input() parent: string = "";
  @Input() id: string | undefined ="";

  usersService = inject(UsersService)

  

  async borrarUser(id: string | undefined){
    //llamar al servicio para borrar la serie
    if (id !== undefined) {
          let confirmacion = confirm("¿Estás seguro de que quieres eliminar al usuario?" +  this.id);
      if (confirmacion){
        //borrar
        let response = await this.usersService.delete(id);
        if(response._id){
          alert(`${response.first_name} ${response.last_name} borrado correctamente`)
        }
      }
    }
  }
}

