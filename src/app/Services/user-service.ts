import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../Interfaces/user-interface';
import { PageInterface } from '../Interfaces/PageInterface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = `http://localhost:8080/api/users`;

  constructor(private http: HttpClient) {}

  createUser(user:any):Observable<UserInterface>{
    return this.http.post<UserInterface>(`${this.apiUrl}`,user);
  }

  getAllUsers():Observable<PageInterface<UserInterface>>{
    return this.http.get<PageInterface<UserInterface>>(this.apiUrl);
  }

  getUserById(id:any):Observable<UserInterface>{
    return this.http.get<UserInterface>(`${this.apiUrl}/${id}`);
  }

}
