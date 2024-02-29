import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser.interface';
import { Users } from '../db/users.db';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private arrUsers: IUser [] = Users;

  getAll(): IUser [] {
    return this.arrUsers
  }
}


