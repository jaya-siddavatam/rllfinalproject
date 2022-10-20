// import { Component, Input, OnInit, } from '@angular/core';
// import { Card } from '../model/card';
// import { CardServiceService } from '../services/card-service.service';
// import { ShareInfoService } from '../services/share-info.service';


// @Component({
//   selector: 'app-movie-details',
//   templateUrl: './movie-details.component.html',
//   styleUrls: ['./movie-details.component.css']
// })
// export class MovieDetailsComponent implements OnInit {
//     card: Card ={
//       id: 1,
//       title: "",
//       imageUrl: "",
//       genre:"",
//       date:"",
//       place:"",
//       description:"",
//       price:1,
//       seatscount:1,
//       language:""
//   };

//   ticketsno : number = 0;

//   constructor(private shareInfo: ShareInfoService,private cardservice :CardServiceService) { }

//   ngOnInit(): void {
//     this.shareInfo.shareCardDetails.subscribe(rep => this.card = rep)
//   }

//   onSubmit(){
//     console.log(this.ticketsno);
//     if(this.card.seatscount<this.ticketsno){
//       console.log("insufficient seats");
//       return;
//     }
//     this.card.seatscount = this.card.seatscount - this.ticketsno;
//     this.cardservice.updateCard(this.card.id,this.card).subscribe(res=>{
//       console.log(res)
//     })
//   }
// }

//import {  FormGroup ,FormControl,Validators} from "@angular/forms";
import { Component, Input, OnInit, } from '@angular/core';
import { Card } from '../model/card';
import { CardServiceService } from '../services/card-service.service';
import { ShareInfoService } from '../services/share-info.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../services/book.service';
import { ShareBookService } from '../services/share-book.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
    card: Card ={
      id: 1,
      title: "",
      imageUrl: "",
      price: 1,
      seatscount: 1,
      description: "",
      place: "",
      genre: "",
      language: "",
      date: ""
    };
    loginref = new FormGroup ({
      tickets:new FormControl("",[Validators.required]),
      //cost:new FormControl("300/Perticke",[Validators.required])
  
    })
    public bookForm:FormGroup;

  ticketsno : number = 0;
  
  constructor(private shareInfo: ShareInfoService,private cardservice :CardServiceService,private router: Router,private formbuilder: FormBuilder,private bookservice:BookService,private shareBook:ShareBookService) {

    this.bookForm=this.formbuilder.group({
      ticketsno : ['',Validators.required],
      amount : ['',Validators.required],
      dob : ['',Validators.required],
    })
   }

  ngOnInit(): void {
    this.shareInfo.shareCardDetails.subscribe(rep => this.card = rep)
    this.bookForm?.get('ticketsno')?.valueChanges.subscribe((): void => {
      this.bookForm.get('amount')?.setValue(this.ticketsno * this.card.price, { emitEvent:false});
    });
  }

  bookTicket(){
    this.bookservice.addBook(this.bookForm.value).subscribe(res => {})
    console.log(this.bookForm.value);
    this.shareBook.exchangeData(this.bookForm.value);
    this.router.navigate(['/payment']);
  }
  onSubmit(){
    console.log(this.ticketsno);
    if(this.card.seatscount<this.ticketsno){
      console.log("insufficient seats");
      return;
    }
    this.card.seatscount = this.card.seatscount - this.ticketsno;
    this.cardservice.updateCard(this.card.id,this.card).subscribe(res=>{
      console.log(res);
    })
  }
  user(){

    let totalcost:any = this.loginref.value;
    sessionStorage.setItem("cost",totalcost.tickets);
    this.router.navigate(["payment"])
    // this.router.navigate{[]}
  }
}
