import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareBookService {
private content = new BehaviorSubject<string>("");
private bookDetails = new BehaviorSubject<any>({});
public shareSearch = this.content.asObservable();
public shareBookDetails = this.bookDetails.asObservable();

  constructor() { }

  updateData(search: string){
    this.content.next(search);
  }

  exchangeData(book: object){
    this.bookDetails.next(book);
    console.log(book);
  }

}
