import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-draft-actions',
  templateUrl: './draft-actions.component.html',
  styleUrls: ['./draft-actions.component.css']
})
export class DraftActionsComponent {
  @Input() draft;
  @Output() favDraftClick = new EventEmitter();
  @Output() deleteDraftClick: EventEmitter<any> = new EventEmitter();
  @Output() tweetDraftClick = new EventEmitter();

  favDraft(id) {
    return this.favDraftClick.emit();
  }

  deleteDraft(id: any) {
    return this.deleteDraftClick.emit(id);
  }

  tweetDraft(id) {
    return this.tweetDraftClick.emit();
  }
}
