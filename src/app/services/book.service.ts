import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  addBook(book:any):Observable<object> {
    return this.http.post("http://localhost:8082/books/addBook",book);
  }
  getMovie(id:number):Observable<object>
  {
    return this.http.get(`http://localhost:8082/books/book/${id}`);
  }
}
