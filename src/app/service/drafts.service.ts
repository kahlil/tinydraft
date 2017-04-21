import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Draft } from '../app.interface';
import db from 'localforage';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergeAll';


@Injectable()
export class DraftsService {
  getDrafts(): Observable<Draft[]> {
    return Observable.fromPromise(db.getItem('drafts'))
      .map((drafts: Draft[]) => drafts === null ? [] : drafts);
  }

  getFavedDrafts() {
    return this.getDrafts()
      .map((drafts: Draft[]) => drafts.filter(d => d.faved));
  }

  saveDrafts(drafts): Observable<Draft[]> {
    return Observable.fromPromise(db.setItem('drafts', drafts));
  }

  clearAllDrafts(): void {
    Observable.fromPromise(db.clear())
      .subscribe(() => console.info('The database has been cleared.'));
  }

  getDraft(id: number): Observable<Draft> {
    return this.getDrafts()
      .map((draftsArr: Draft[]) => draftsArr.filter(d => d.id === id))
      .map(d => d[0]);
  }

  saveDraft(draft: Draft): Observable<Draft[]> {
    return this.getDrafts()
      .map((drafts: Draft[]) => {
        const index = drafts.findIndex((d: Draft) => d.id === draft.id);
        if (index === -1) {
          drafts.unshift(draft);
        } else {
          drafts[index] = draft;
        }
        return drafts;
      })
      .map((drafts: Draft[]) => this.saveDrafts(drafts))
      .mergeAll();
  }

  deleteDraft(id: number): Observable<Draft[]> {
    return this.getDrafts()
      .map((drafts: Draft[]) => drafts.filter(draft => draft.id !== id))
      .map((drafts: Draft[]) => this.saveDrafts(drafts))
      .mergeAll();
  }
}
