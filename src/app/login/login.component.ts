import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router, private userService: UserService) { }

  login() {
    const users = this.userService.getUsers();
    const matchedUser = users.find(
      (user: any) =>
        user.username === this.username && user.password === this.password
    );

    if (matchedUser) {
      alert('Login successful!');
      this.router.navigate(['/homepage']);
    } else {
      alert('Invalid username or password!');
    }
  }

  forgot() {
    const enteredEmail = prompt('Enter your registered email:');
    const matchUser = this.userService.forgot(enteredEmail || '');
    if (matchUser) {
      alert(
        `A password reset link has been sent to ${enteredEmail}. Please check your inbox.`
      );
    } else {
      alert('No account found with that email.');
    }
  }
}