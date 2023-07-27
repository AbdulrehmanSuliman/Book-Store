import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from 'firebase.config';
import { AuthService } from './auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'BookStore';
  constructor(private authservice: AuthService) {}
  ngOnInit(): void {
    initializeApp(firebaseConfig);
  }
  isAuthonticated() {
    return this.authservice.isAuthonticated;
  }
  logout() {
    this.authservice.logout();
  }
}
