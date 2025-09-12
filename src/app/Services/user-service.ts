import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UserInterface } from '../Interfaces/user-interface';
import { PageInterface } from '../Interfaces/PageInterface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = `http://localhost:8080`;
  constructor(private http: HttpClient) {}

  login(form: any): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/auth/login`, form)
      .pipe(tap((response: any) => this.doLoginUser(response.JWT)));
  }

  createUser(user: any): Observable<UserInterface> {
    return this.http.post<UserInterface>(`${this.apiUrl}/api/users`, user);
  }

  getAllUsers(): Observable<PageInterface<UserInterface>> {
    let options = this.createHeader();
    return this.http.get<PageInterface<UserInterface>>(
      `${this.apiUrl}/api/users`,
      options
    );
  }

  getUserById(id: any): Observable<UserInterface> {
    let options = this.createHeader();
    return this.http.get<UserInterface>(
      `${this.apiUrl}/api/users/${id}`,
      options
    );
  }

  getUserByTokenJWT(token: any): Observable<UserInterface> {
     let options = this.createHeader();
    return this.http.get<UserInterface>(
      `${this.apiUrl}/api/users/token`,
      options
    );
  }

  doLoginUser(tokens: any) {
    sessionStorage.setItem('token', tokens);
  }

  private createHeader() {
    let token =
      typeof window !== 'undefined' ? sessionStorage.getItem('token') : null;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return { headers: headers };
  }
}
