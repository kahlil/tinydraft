import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {
  @Input() draft;

  constructor() { }

  ngOnInit() { }
}
