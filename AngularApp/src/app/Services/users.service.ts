import { User } from './../entity/User';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url:string;
  constructor(private http: HttpClient) {
    this.url="http://localhost:8080/users";
   }

   public findUserDetails():Observable<User[]>{
     return this.http.get<User[]>(this.url);
   }

   public saveUserDetail(user: User){
     return this.http.post<User>(this.url, user);
   }
   
   public findUserById(id): Observable<User[]>{
     return this.http.get<User[]>(this.url);
   }
}
