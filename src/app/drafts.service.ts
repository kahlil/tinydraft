import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import db from 'localforage';

import 'rxjs/add/observable/fromPromise';

@Injectable()
export class DraftsService {
  drafts = [
    {
      id: 1,
      text: 'This is jus a quick jot-down of some words I thought of. Check this out: more words. This is jus a quick jot-down of some words I thought of. Check this out: more words. This is jus a quick jot-down of some words I thought of. Check this out: more words. This is jus a quick jot-down of some words I thought of. Check this out: more words.This is jus a quick jot-down of some words I thought of. Check this out: more words. This is jus a quick jot-down of some words I thought of. Check this out: more words. This is jus a quick jot-down of some words I thought of. Check this out: more words. This is jus a quick jot-down of some words I thought of. Check this out: more words.',
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
    },
    {
      id: 5,
      text: 'A tiny draft for a tweet I thought of.',
      date: '12.4.2017',
    },
    {
      id: 6,
      text: 'Something I need to remember for later. Maybe I\'ll send it to myself as a text.',
      date: '12.2.2017',
    },
    {
      id: 7,
      text: 'A draft for an email I will send later at 5pm. Bla bla bla bla. That\'s basically what I\'m going to say.',
      date: '12.12.2017',
    },
    {
      id: 8,
      text: 'A tiny draft for a tweet I thought of.',
      date: '12.4.2017',
    },
    {
      id: 9,
      text: 'Something I need to remember for later. Maybe I\'ll send it to myself as a text.',
      date: '12.2.2017',
    },
    {
      id: 10,
      text: 'A draft for an email I will send later at 5pm. Bla bla bla bla. That\'s basically what I\'m going to say.',
      date: '12.12.2017',
    }
  ].reverse();

  getDraft(id) {
    const drafts$ = Observable.fromPromise(db.getItem('drafts'));
    // return idbKeyval.get('drafts')
    //   .then(val => {
    //     const index = this.drafts.findIndex(d => d.id === parseInt(id, 10));
    //     console.log(id, this.drafts, index);
    //     return this.drafts[index];
    //   });
  }

  getDrafts() {
    return Observable.fromPromise(db.getItem('drafts'));
  }

  saveDraft(draft) {
    const index = this.drafts.findIndex(d => d.id === draft.id);
    if (index === -1) {
      this.drafts.unshift(draft);
    } else {
      this.drafts[index] = draft;
    }
    return this.drafts;
  }

  deleteDraft(id) {
    this.drafts = this.drafts.filter(draft => draft.id !== id);
    return this.drafts;
  }
}
