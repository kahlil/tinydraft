import {
  Component,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { DraftsService } from '../service/drafts.service';
import { Draft } from '../app.interface';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  draft: Draft;
  keyup$: Observable<KeyboardEvent> = Observable.fromEvent(document.body, 'keyup');
  escKey$: Subscription;
  text$: EventEmitter<string> = new EventEmitter();
  characterCount: Observable<number>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private draftsService: DraftsService,
  ) { }

  ngOnInit() {
    this.draft = this.route.snapshot.data['draft'];
    // Save and close and save draft on escape key event.
    this.escKey$ = this.keyup$
      .filter((e: KeyboardEvent) => e.code === 'Escape')
      .subscribe(() => this.saveDraft());
    // Character count streams.
    this.characterCount = this.text$
      .map((text: string) => text.length)
      .startWith(0);
  }

  saveDraft() {
    if (this.draft.text !== '') {
      this.draftsService.saveDraft(this.draft)
        .subscribe((d) => {
          this.router.navigateByUrl('/');
        });
    } else {
      this.router.navigateByUrl('/');
    }
  }

  closeDraft() {
    this.saveDraft();
  }
}
