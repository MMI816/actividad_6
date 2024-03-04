import { Component, inject } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';
import { UsersService } from '../../services/users.service';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { IData } from '../../interfaces/idata.interfaces';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
 
  usersServices = inject(UsersService);
  arrUsers:IUser[] = [];


  ngOnInit(): void {
    this.usersServices.getAll().subscribe((response: any )=> {
      this.arrUsers = response.results;
    })
  }
}
