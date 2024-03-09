import { Component, Input, inject } from '@angular/core';
import { IUser } from '../../interfaces/iuser.interface';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';
import { UserButtonsComponent } from '../../components/user-buttons/user-buttons.component';


@Component({
  selector: 'app-user-view',
  standalone: true,
  imports: [UserButtonsComponent],
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css'
})
export class UserViewComponent {
  @Input() user!: IUser;
  activatedRoute = inject(ActivatedRoute);
  usersServices = inject(UsersService);
  unUser!: IUser
  

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async(params: any) => {
      const id = params.id;
      console.log(id);

      try {
        this.unUser = await this.usersServices.getById(id)
      
      } catch (error) {
        console.log(error);
      }
    });

  }

  
}
