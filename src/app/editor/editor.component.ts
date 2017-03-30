import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DraftsService } from '../drafts.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  draft;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private draftsService: DraftsService,
  ) { }

  ngOnInit() {
    this.draft = this.route.snapshot.data['draft'];
  }

  saveDraft() {
    if (this.draft.text !== '') {
      this.draftsService.saveDraft(this.draft);
    }
    this.router.navigateByUrl('/');
  }
}
