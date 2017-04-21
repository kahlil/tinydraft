import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { DraftsService } from './drafts.service';
import { Draft } from '../app.interface';

@Injectable()
export class DraftsListResolve {
  constructor(private draftsService: DraftsService) {}

  resolve() {
    return this.draftsService.getDrafts();
  }
}

@Injectable()
export class FavedDraftsResolve {
  constructor(private draftsService: DraftsService) {}

  resolve() {
    return this.draftsService.getFavedDrafts();
  }
}

@Injectable()
export class DraftResolve implements Resolve<any> {
  constructor(private draftsService: DraftsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.draftsService.getDraft(parseInt(route.params['id'], 10));
  }
}

@Injectable()
export class EmptyDraftResolve implements Resolve<any> {
  constructor(private draftsService: DraftsService) {}

  resolve() {
    return this.draftsService.getDrafts()
      .map((drafts: Draft[]) => drafts.reduce((newDraft: Draft, draft: Draft) => {
          const newDraftUpdated = { ...newDraft, id: draft.id + 1 };
          return (newDraft.id <= draft.id) ? newDraftUpdated : newDraft;
        }, { id: 0, text: '', date: new Date() })
      );
  }
}
