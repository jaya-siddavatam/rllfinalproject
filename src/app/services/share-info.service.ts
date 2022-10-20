import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareInfoService {
private content = new BehaviorSubject<string>("");
private cardDetails = new BehaviorSubject<any>({});
public shareSearch = this.content.asObservable();
public shareCardDetails = this.cardDetails.asObservable();

  constructor() { }

  updateData(search: string){
    this.content.next(search);
  }

  exchangeDta(card: object){
    this.cardDetails.next(card);
    console.log(card);
  }

}
