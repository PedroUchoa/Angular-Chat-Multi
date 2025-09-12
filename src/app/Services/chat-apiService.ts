import { Injectable } from '@angular/core';
import { ServerInterface } from '../Interfaces/serverInterface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PageInterface } from '../Interfaces/PageInterface';


@Injectable({
  providedIn: 'root',
})
export class ChatApi {
  private apiUrl = `http://localhost:8080/api/chatServer`;
  private token = typeof window !== 'undefined' ? sessionStorage.getItem('token') : null;

  constructor(private http: HttpClient) {}

  createServer(
    name: any,
    image: any,
    idUser: any
  ): Observable<ServerInterface> {
    const message = { name, image, idUser };
    let options = this.createHeader();
    return this.http.post<ServerInterface>(`${this.apiUrl}`, message, options);
  }

  getAllServer(): Observable<PageInterface<ServerInterface>> {
    let options = this.createHeader();
    return this.http.get<PageInterface<ServerInterface>>(this.apiUrl,options);
  }

  getServerById(id: string): Observable<ServerInterface> {
    let options = this.createHeader();
    return this.http.get<ServerInterface>(`${this.apiUrl}/${id}`,options);
  }

  addUserToServer(id: string, userId?: string): Observable<ServerInterface> {
    let options = this.createHeader();
    return this.http.post<ServerInterface>(
      `${this.apiUrl}/${id}/add/${userId}`,
      null,options
    );
  }

  private createHeader(){
        let headers = new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.token}`,
        });
        return { headers: headers };
  }

}
