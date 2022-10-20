import { Component, OnInit } from '@angular/core';
import { CardServiceService } from 'src/app/services/card-service.service';
import { LangFilterService } from 'src/app/services/lang-filter.service';
import { ShareInfoService } from 'src/app/services/share-info.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  cardserviceservice: any;
 search = "";
 language: Array<string> = [];
 
 
  constructor(private CardServiceService: CardServiceService, private data:ShareInfoService, private dataFilter:LangFilterService) { }
public cards:any;

  ngOnInit(): void {
    this.CardServiceService.showCards().subscribe((cards) => {
      this.cards = cards;
    })
    this.data.shareSearch.subscribe(rtvdv => this.search =rtvdv)
    this.dataFilter.langSearch.subscribe(lftr => this.language =lftr)
  }
sendDataToMovie(card:object){
  this.data.exchangeDta(card);
}
}
