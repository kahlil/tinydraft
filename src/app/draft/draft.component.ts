import { Component, Input, Output, OnInit, EventEmitter, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DraftsService } from '../drafts.service';
import snarkdown from 'snarkdown';
import htmlTruncate from 'html-truncate';
import { CSS } from './draft.component.styles';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css'],
})
export class DraftComponent implements OnInit {
  @Input() draft;
  @Output() deleteDraftClick: EventEmitter<any> = new EventEmitter();
  displayedText = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private draftsService: DraftsService,
  ) { }

  ngOnInit() {
    if (this.draft) {
      this.displayedText = htmlTruncate(snarkdown(this.draft.text), 100);
    } else {
      this.draft = this.route.snapshot.data['draft'];
      this.displayedText = snarkdown(this.draft.text);
    }
  }

  shortenDraftText(text) {
    const words = text.match(/\S+/g);
    const shortText = words.filter((word, i) => i <= 30).join(' ');
    return words.length > 30 ? shortText + '...' : shortText;
  }

  toggleFav() {
    this.draft.faved = !this.draft.faved;
    this.draftsService.saveDraft(this.draft)
      .subscribe(drafts => console.info('draft is saved'));
  }

  viewDraft(id) {
    this.router.navigate(['draft', id]);
  }

  editDraft(id) {
    this.router.navigate(['edit', id]);
  }

  deleteDraft(id) {
    this.deleteDraftClick.emit(id);
  }

  tweetDraft() {
    const strippedText = this.draft.text.replace(/<[^>]+>/ig, '');
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(strippedText)}`,
      'tinydraft',
      'width=600,height=300'
    );
  }
}
