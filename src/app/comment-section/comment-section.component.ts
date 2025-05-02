import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css'],
})
export class CommentSectionComponent {
  @Input() comments: string[] = [];
  @Output() commentAdded = new EventEmitter<string>();
  @Output() commentDeleted = new EventEmitter<number>();

  newComment: string = '';

  addComment() {
    if (this.newComment.trim()) {
      this.commentAdded.emit(this.newComment);
      this.newComment = '';
    }
  }
  deleteComment(index: number) {
    this.commentDeleted.emit(index);
  }
}
