import { Component} from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent {
  friends = [
    { image: 'assets/frd1.jpg', name: 'frd1' },
    { image: 'assets/frd2.png', name: 'frd2' },
    { image: 'assets/frd3.png', name: 'frd3' },
    { image: 'assets/frd4.png', name: 'frd4' },
  ];

  selectedFriend: string | null = null;
  friendImage: string = '';

  constructor() { }

  selectFriend(friend: any): void {
    this.selectedFriend = friend.name;
    this.friendImage = friend.image;
  }
}
