import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnChanges {
  @Input() selectedFriend: string | null = null;
  @Input() friendImage: string = '';

  message: string = '';
  messages: string[] = [];

  constructor(private shareService: ShareService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedFriend']) {
      this.messages = this.shareService.getMessages(this.selectedFriend || '');
    }
  }

  sendMessage(): void {
    if (this.selectedFriend && this.message.trim()) {
      this.messages.push(this.message);
      this.shareService.addMessage(this.selectedFriend, this.message); 
      this.message = '';
    } else {
      alert('Please type a message before sending.');
    }
  }
}