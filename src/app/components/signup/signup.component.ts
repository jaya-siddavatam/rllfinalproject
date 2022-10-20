import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { ShareInfoService } from 'src/app/services/share-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public registerForm:FormGroup;
  search = "";

  constructor(private formbuilder: FormBuilder,private userservice:UsersService, private data:ShareInfoService,private router: Router) {
this.registerForm=this.formbuilder.group({
  userName : ['',Validators.required],
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

  signupUser(registerForm: any){
    this.userservice.addUser(registerForm.value).subscribe(res => {})
    console.log(registerForm.value);
    this.router.navigate(['/login']);
  }
}
