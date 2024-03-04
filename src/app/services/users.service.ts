import { Injectable, inject } from '@angular/core';
import { IUser } from '../interfaces/iuser.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  httpClient = inject(HttpClient);
  baseUrl = 'https://peticiones.online/api/users';
  
  getAll() : Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.baseUrl);
  }

}


