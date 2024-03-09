import { Component, Input, inject } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';
import { RouterLink } from '@angular/router';
import { UserButtonsComponent } from '../user-buttons/user-buttons.component';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [RouterLink, UserButtonsComponent],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() myUser!:IUser;

}
