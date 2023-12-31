import { Component } from '@angular/core';
import { LoginForm } from '../../types/Auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: LoginForm = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) {}
  handleSubmit() {
    this.authService.login(this.form);
  }
  isLoading() {
    return this.authService.isLoading;
  }
}
