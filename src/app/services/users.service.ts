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


  getAllPromise(): Promise<IUser[]> {
    return lastValueFrom(this.httpClient.get<{ results: IUser[] }>(this.baseUrl))
    .then(response => response.results); 
  }

  getById(_id:string): Promise<IUser> {
    return lastValueFrom (this.httpClient.get<IUser>(`${this.baseUrl}/${_id}`));
  }


  delete(_id: string): Promise<IUser> {
    return lastValueFrom(this.httpClient.delete<IUser>(`${this.baseUrl}/${_id}`));
  }

  insert(formValue: IUser) : Promise<IUser> {
    return lastValueFrom(this.httpClient.post<IUser>(this.baseUrl, formValue));
  }

  update(formValue: IUser) : Promise<IUser> {
    return lastValueFrom(this.httpClient.put<IUser>(`${this.baseUrl}/${formValue._id}`, formValue));
  }

}


