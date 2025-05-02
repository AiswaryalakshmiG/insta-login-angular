import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShareService {
  private messages: { [friend: string]: string[] } = {};

  constructor() {}

  addMessage(friend: string, message: string): void {
    if (!this.messages[friend]) {
      this.messages[friend] = [];
    }
    this.messages[friend].push(message);
  }

  getMessages(friend: string): string[] {
    return this.messages[friend] || [];
  }
}