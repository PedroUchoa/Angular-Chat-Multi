import { Injectable } from '@angular/core';
import { ServerInterface } from '../Interfaces/serverInterface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PageInterface } from '../Interfaces/PageInterface';


@Injectable({
  providedIn: 'root',
})
export class ChatApi {
  private apiUrl = `http://localhost:8080/api/chatServer`;

  constructor(private http: HttpClient){}

  createServer(name:any, image:any,idUser:any):Observable<ServerInterface>{
    const message = {name,image,idUser}
    return this.http.post<ServerInterface>(`${this.apiUrl}`,message);
  }


  getAllServer():Observable<PageInterface<ServerInterface>>{
    return this.http.get<PageInterface<ServerInterface>>(this.apiUrl);
  }

  getServerById(id:string):Observable<ServerInterface>{
    return this.http.get<ServerInterface>(`${this.apiUrl}/${id}`)
  }

  addUserToServer(id:string,userId?:string):Observable<ServerInterface>{
    return this.http.post<ServerInterface>(`${this.apiUrl}/${id}/add/${userId}`,null);
  }



}
