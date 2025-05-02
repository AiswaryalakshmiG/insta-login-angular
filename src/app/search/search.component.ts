import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  friendName: string = '';
  friends: string[] = ['frd1', 'frd2', 'frd3', 'frd4'];
  filteredFriends: string[] = [];

  constructor(private router: Router) { }

  searchFriend(): void {
    this.filteredFriends = this.friends.filter(friend =>
      friend.toLowerCase() === this.friendName.toLowerCase()
    );

    if (this.filteredFriends.length > 0) {
      this.router.navigate(['/message']);
    } else {
      alert('User is not your friend');
    }
  }
}
