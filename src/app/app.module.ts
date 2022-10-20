import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CardServiceService } from './services/card-service.service';
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesComponent } from './components/movies/movies.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { UpdateCardComponent } from './components/update-card/update-card.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { PaymentComponent } from './payment/payment.component';
import { SummaryComponent } from './summary/summary.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AdminComponent,
    MoviesComponent,
    SidenavComponent,
    MovieDetailsComponent,
    UpdateCardComponent,
    LoginComponent,
    SignupComponent,
    AddMovieComponent,
    PaymentComponent,
    SummaryComponent,
    AboutusComponent,
    ContactusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
