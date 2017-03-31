import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DraftsService } from '../drafts.service';
import { CSS } from './draft.component.styles';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {
  @Input() draft;
  @Output() deleteDraftClick: EventEmitter<any> = new EventEmitter();
  text: string;

  constructor(
    private draftsService: DraftsService,
    private router: Router
  ) { }

  ngOnInit() {
    const words = this.draft.text.match(/\S+/g);
    const text = words.filter((word, i) => i <= 30).join(' ');
    this.text = words.length > 30 ? text + '...' : text;
    // this.text = this.draft.text;
  }

  toggleFav() {
    this.draft.faved = !this.draft.faved;
    this.draftsService.saveDraft(this.draft);
  }

  editDraft(id) {
    this.router.navigate(['edit', id]);
  }

  deleteDraft(id) {
    this.deleteDraftClick.emit(id);
  }
}
