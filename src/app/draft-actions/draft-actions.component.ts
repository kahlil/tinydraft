import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-draft-actions',
  templateUrl: './draft-actions.component.html',
  styleUrls: ['./draft-actions.component.css']
})
export class DraftActionsComponent {
  @Input() draft;
  @Output() favDraftClick = new EventEmitter();
  @Output() deleteDraftClick = new EventEmitter();

  favDraft(id) {
    return this.favDraftClick.emit();
  }

  deleteDraft(id) {
    return this.deleteDraftClick.emit(id);
  }
}
