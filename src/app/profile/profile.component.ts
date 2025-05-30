import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  constructor(private router: Router) { }

  logout(): void {
    alert('Logging out...');
    this.router.navigate(['/login']);
  }

  ngOnInit(): void { }
}
