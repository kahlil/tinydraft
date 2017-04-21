import { DraftslistComponent } from './draftslist/draftslist.component';
import { DraftComponent } from './draft/draft.component';
import { EditorComponent } from './editor/editor.component';
import {
  DraftResolve,
  FavedDraftsResolve,
  EmptyDraftResolve,
  DraftsListResolve,
} from './service/drafts.resolve';

export const tinydraftRoutes = [
  {
    path: '',
    component: DraftslistComponent,
    resolve: {
      drafts: DraftsListResolve
    }
  },
  {
    path: 'faved',
    component: DraftslistComponent,
    resolve: {
      drafts: FavedDraftsResolve
    }
  },
  {
    path: 'new',
    component: EditorComponent,
    resolve: {
      draft: EmptyDraftResolve
    }
  },
  {
    path: 'draft/:id',
    component: DraftComponent,
    resolve: {
      draft: DraftResolve,
    }
  },
  {
    path: 'edit/:id',
    component: EditorComponent,
    resolve: {
      draft: DraftResolve,
    }
  }
];
