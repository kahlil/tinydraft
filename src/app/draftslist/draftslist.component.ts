import { Component, OnInit } from '@angular/core';

const drafts = [
  {
    id: 1,
    text: 'This is jus a quick jot-down of some words I thought of. Check this out: more words.',
    date: '1.1.2017',
  },
  {
    id: 2,
    text: 'A tiny draft for a tweet I thought of.',
    date: '12.4.2017',
  },
  {
    id: 3,
    text: 'Something I need to remember for later. Maybe I\'ll send it to myself as a text.',
    date: '12.2.2017',
  },
  {
    id: 4,
    text: 'A draft for an email I will send later at 5pm. Bla bla bla bla. That\'s basically what I\'m going to say.',
    date: '12.12.2017',
  }
];

@Component({
  selector: 'app-draftslist',
  templateUrl: './draftslist.component.html',
  styleUrls: ['./draftslist.component.css'],
})
export class DraftslistComponent implements OnInit {
  drafts = drafts;
  constructor() { }
  ngOnInit() { }
}
