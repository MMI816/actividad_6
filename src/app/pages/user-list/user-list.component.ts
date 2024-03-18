import { Component, inject } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';
import { UsersService } from '../../services/users.service';
import { UserCardComponent } from '../../components/user-card/user-card.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [RouterOutlet,UserCardComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
 
  usersServices = inject(UsersService);
  Users:IUser[] = [];


  async ngOnInit(): Promise<void> {
  this.Users = await this.usersServices.getAll()};
  
  changePage(page: number): void {
    this.usersServices.getAll(page).then(users => this.Users = users);
  }

  }

