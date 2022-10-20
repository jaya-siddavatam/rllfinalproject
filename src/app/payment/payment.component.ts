import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentForm!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
        private router: Router,
        private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.paymentForm = this.formBuilder.group({
      cardnumber: [''],
      month: ['', Validators.required],
      year: ['', Validators.required],
      cvv: ['', Validators.required]
  });
  }
  get f() { return this.paymentForm.controls; }


  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.paymentForm.invalid) {
        return;
    }

    this.loading = true;
    this.router.navigate(['/review']);
}
}
