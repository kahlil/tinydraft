import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { DraftsService } from './drafts.service';

@Injectable()
export class DraftsListResolve {
  constructor(private draftsService: DraftsService) {}

  resolve() {
    return this.draftsService.getDrafts();
  }
}

@Injectable()
export class DraftResolve implements Resolve<any> {
  constructor(private draftsService: DraftsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.draftsService.getDraft(route.params['id']);
  }
}

@Injectable()
export class EmptyDraftResolve implements Resolve<any> {
  constructor(private draftsService: DraftsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return {
      id: this.draftsService.getDrafts().length + 1,
      text: '',
      date: new Date(),
    };
  }
}
