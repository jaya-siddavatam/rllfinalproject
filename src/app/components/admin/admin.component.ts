import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardServiceService } from 'src/app/services/card-service.service';
import { ShareInfoService } from 'src/app/services/share-info.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
 search = "";
 public cards:any;
  constructor(private CardServiceService: CardServiceService, private data:ShareInfoService , public router:Router) {  }

  ngOnInit(): void {
    this.CardServiceService.showCards().subscribe((cards) => {
      this.cards = cards;
    })
    this.data.shareSearch.subscribe(rtvdv => this.search =rtvdv)
  }
sendDataToMovie(card:object):any{
  this.data.exchangeDta(card)
}
deleteCard(cardId:number){
  // this.CardServiceService.deleteCard(cardId).subscribe(res => {})
  console.log(cardId)
  // this.router.navigate(['admin']);
  // deleteProduct(pid:number){
  //   //console.log(pid)
  //   this.ps.deleteProductById(pid).subscribe({
  //     next:(result:any)=>console.log(result),
  //     error:(error:any)=>console.log(error),
  //     complete:()=>{
  //         this.findAllProduct();   
  //     }
  //   })

  this.CardServiceService.deleteCard(cardId).subscribe({
    next:(result:any)=>console.log(result),
    error:(error:any)=>console.log(error),
    complete:()=> {
      alert("Movie Deleted Successfully");
      this.ngOnInit();
    },
  })
  
}

}
