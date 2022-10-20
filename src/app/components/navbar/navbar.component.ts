import { Component, OnInit } from '@angular/core';
import { ShareInfoService } from 'src/app/services/share-info.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  search = "";
  
  constructor(private data:ShareInfoService) { }

  ngOnInit(): void {
  }

  searchFun(value:any) {
    this.data.updateData(value)
    console.log(value);
  }

  


}
