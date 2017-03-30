import { DraftslistComponent } from './draftslist/draftslist.component';
import { EditorComponent } from './editor/editor.component';
import { DraftResolve, EmptyDraftResolve, DraftsListResolve } from './drafts.resolve';

export const tinydraftRoutes = [
  {
    path: '',
    component: DraftslistComponent,
    resolve: {
      drafts: DraftsListResolve
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
    path: 'edit/:id',
    component: EditorComponent,
    resolve: {
      draft: DraftResolve,
    }
  },
];
