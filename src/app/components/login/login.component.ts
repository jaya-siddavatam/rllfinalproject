import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGuard } from 'src/app/guards/admin.guard';
import { UserGuard } from 'src/app/guards/user.guard';
import { UsersService } from 'src/app/services/users.service';
import { ShareInfoService } from 'src/app/services/share-info.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm:FormGroup;
  search = "";
  constructor(private formbuilder: FormBuilder,private userservice:UsersService, private router: Router, private adminguard: AdminGuard, private userguard:UserGuard, private data:ShareInfoService) { 
    this.loginForm=this.formbuilder.group({
      email : ['',Validators.required],
      password : ['',Validators.required],
    })
  }


  ngOnInit(): void {
  }
  searchFun(value:any) {
    this.data.updateData(value)
    console.log(value);
  }

  loginUser(loginForm: any){

    this.userservice.showUsers().subscribe(rep => {
      const users: any = rep;
      for (const user of users) {
        console.log(user);

        if (user.email == this.loginForm.value.email && user.password == this.loginForm.value.password) {
          if (user.role){
            this.adminguard.allowAdmin=true;
          this.router.navigateByUrl("/admin")
        }
        else{
          this.userguard.allowUser=true;
          this.router.navigateByUrl("/movies")
        }
      }
        else {
          console.log("not authenticated");

        }
      }
    })

  }
}
