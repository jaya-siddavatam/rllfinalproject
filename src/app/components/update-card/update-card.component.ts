import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Card } from 'src/app/model/card';
import { CardServiceService } from 'src/app/services/card-service.service';
import { ShareInfoService } from 'src/app/services/share-info.service';

@Component({
  selector: 'app-update-card',
  templateUrl: './update-card.component.html',
  styleUrls: ['./update-card.component.css']
})
export class UpdateCardComponent implements OnInit {
  public cardForm:FormGroup;
  card: Card ={
    id: 1,
    title: "",
    imageUrl: "",
    genre:"",
    date:"",
    place:"",
    description:"",
    price:1,
    seatscount:1,
    language:""
  };

  constructor(private formBuilder: FormBuilder, private shareInfo: ShareInfoService, private CardServiceService: CardServiceService, private router: Router) {
    this.shareInfo.shareCardDetails.subscribe(rep => this.card = rep)
    this.cardForm = this.formBuilder.group({
     
      imageUrl:[this.card.imageUrl, [Validators.required]],
      title:[this.card.title, [Validators.required]],
      genre:[this.card.genre, [Validators.required]],
      language:[this.card.language, [Validators.required]],
      price:[this.card.price, [Validators.required]],
      date:[this.card.date, [Validators.required]],
      place:[this.card.place, [Validators.required]],
      description:[this.card.description, [Validators.required]],
      seatscount:[this.card.seatscount,[Validators.required]],

    })
   }

  ngOnInit(): void {
   

  }
  cardSubmit(cardForm : any){
const combi = {id:this.card.id , ...cardForm.value}
    this.CardServiceService.updateCard(this.card.id, combi).subscribe((res) => {
    this.router.navigateByUrl('/admin');

    })

}
}