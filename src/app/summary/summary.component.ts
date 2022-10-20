import { Component, OnInit } from '@angular/core';
import { Card } from '../model/card';
import { CardServiceService } from '../services/card-service.service';
import { ShareInfoService } from '../services/share-info.service';
import { Router } from '@angular/router';
import { Book } from '../model/book';
import { BookService } from '../services/book.service';
import { ShareBookService } from '../services/share-book.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  card: Card={
    id: 0,
    title: "",
    imageUrl: "",
    price: 0,
    seatscount: 0,
    description: "",
    place: "",
    genre: "",
    language: "",
    date: ""
  } ;
  book: Book={
    id: 0,
    ticketsno: 0,
    amount: 0,
    dob: ""
  };
  ticketsno : number = 0;
  cost:any=0;
  constructor(private shareInfo: ShareInfoService,private shareBook: ShareBookService,private cardservice :CardServiceService,private router: Router, private bookservice :BookService) { }

  ngOnInit(): void {
  this.shareInfo.shareCardDetails.subscribe(data=>this.card= data);
  this.shareBook.shareBookDetails.subscribe(data=>this.book=data);
  let obj = (sessionStorage.getItem("cost"));
  if(obj!=null){
    this.cost= obj;
  }
  
  }

}
