import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent {
  notifications = [
    { id: 1, message: 'You have a new friend request!' },
    { id: 2, message: 'Your post received 5 likes!' },
    { id: 3, message: 'Someone mentioned you in a comment.' },
  ];
}
