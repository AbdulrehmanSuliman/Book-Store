import { Component } from '@angular/core';
import { RegisterForm } from '../../types/Auth';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form: RegisterForm = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(private authService: AuthService) {}
  handleSubmit() {
    this.authService.register(this.form);
  }
  isLoading() {
    return this.authService.isLoading;
  }
  passwordMatched() {
    return this.authService.passwordMatched;
  }
}
