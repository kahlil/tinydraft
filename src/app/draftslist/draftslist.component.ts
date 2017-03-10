import { Component, OnInit } from '@angular/core';

const drafts = [
  {
    id: 1,
    text: 'text 1',
    date: '1.1.2017',
  },
  {
    id: 2,
    text: 'text 2',
    date: '12.4.2017',
  },
  {
    id: 3,
    text: 'text 3',
    date: '12.2.2017',
  },
  {
    id: 4,
    text: 'text 4',
    date: '12.12.2017',
  }
];

@Component({
  selector: 'app-draftslist',
  templateUrl: './draftslist.component.html',
  styleUrls: ['./draftslist.component.css']
})
export class DraftslistComponent implements OnInit {
  drafts = drafts;
  constructor() { }
  ngOnInit() { }
}
