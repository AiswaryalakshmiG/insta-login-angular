import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {

  likeCount: number = 0;
  comments: string[] = [];
  showInputComment: boolean = false;
  showFriendsList: boolean = false;
  private storeData = 'likeCount';


  constructor(private router: Router,
  
    ) {
    const savedComments = localStorage.getItem('comments');
    if (savedComments) {
      this.comments = JSON.parse(savedComments);
    }
  }

getlikeCount(): any[] {
  return JSON.parse(localStorage.getItem(this.storeData) || '[]');
}
likes(likeCount: number): void{
  const like= this.getlikeCount();
  like.push(likeCount);
  localStorage.setItem(this.storeData, JSON.stringify(likeCount));
}

  like() {
    this.likeCount++;
  }

  show() {
    this.showInputComment = !this.showInputComment;
  }

  addComment(comment: string) {
    this.comments.unshift(comment);
    localStorage.setItem('comments', JSON.stringify(this.comments));
  }

  deleteComment(index: number) {
    this.comments.splice(index, 1);
    localStorage.setItem('comments', JSON.stringify(this.comments));
  }

  share() {
    this.showFriendsList = !this.showFriendsList;
  }

  shareWithFriend() {
    this.router.navigate(['/message']);
  }
}
