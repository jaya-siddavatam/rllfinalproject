
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {
  
  constructor(private http: HttpClient) { }
  showCards():Observable<object> {
    return this.http.get("http://localhost:8082/movieCart/allCards");
  }
  postCards(card:any):Observable<object> {
    return this.http.post("http://localhost:8082/movieCart/addCard",card);
  }
  getCard(id:number):Observable<object>
  {
    return this.http.get(`http://localhost:8082/movieCart/card/${id}`);
  }

  updateCard(id:number, card:any):Observable<object>
  {
    return this.http.put(`http://localhost:8082/movieCart/update/${id}`,card);
  }
  deleteCard(id:number):Observable<object>
  {
    return this.http.delete(`http://localhost:8082/movieCart/delete/${id}`);
  }

  }

