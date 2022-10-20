import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  showUsers():Observable<object> {
    return this.http.get("http://localhost:8082/users/allUsers");
  }
  addUser(user:any):Observable<object> {
    return this.http.post("http://localhost:8082/users/addUser",user);
  }
  getUser(id:number):Observable<object>
  {
    return this.http.get(`http://localhost:8082/users/user/${id}`);
  }

  updateUser(id:number, user:any):Observable<object>
  {
    return this.http.put(`http://localhost:8082/users/update/${id}`,user);
  }
  deleteUser(id:number):Observable<object>
  {
    return this.http.delete(`http://localhost:8082/users/delete/${id}`);
  }

}
