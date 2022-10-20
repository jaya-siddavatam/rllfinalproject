import { Component, OnInit } from '@angular/core';
import { CardServiceService } from 'src/app/services/card-service.service';
import { ShareInfoService } from 'src/app/services/share-info.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cardserviceservice: CardServiceService, private data:ShareInfoService) { }
public cards:any;
  ngOnInit(): void {
    this.cardserviceservice.showCards().subscribe((cards) => {
      this.cards = cards;
    })

  }
  searchFun(value:any) {
    this.data.updateData(value)
    console.log(value);
  }

  
}
