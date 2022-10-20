import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Card } from 'src/app/model/card';
import { CardServiceService } from 'src/app/services/card-service.service';
import { ShareInfoService } from 'src/app/services/share-info.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  public cardForm:FormGroup;
  cardserviceservice: any;
  public cards:any;
  constructor(private formBuilder: FormBuilder, private CardServiceService: CardServiceService, private data:ShareInfoService) {
    this.cardForm = this.formBuilder.group({

      imageUrl:['', [Validators.required]],
      title:['', [Validators.required]],
      genre:['', [Validators.required]],
      language:['', [Validators.required]],
      price:['', [Validators.required]],
      date:['', [Validators.required]],
      place:['', [Validators.required]],
      description:['', [Validators.required]],
      seatscount:['',[Validators.required]],

    })

   }
   
  ngOnInit(): void {
   

  }
  cardSubmit(card:any){
    this.CardServiceService.postCards(card.value).subscribe((res) => {
      location.reload();
    })
    
    this.cardForm.reset();
    
  }
}
