import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { DraftComponent } from './draft/draft.component';
import { DraftslistComponent } from './draftslist/draftslist.component';
import { DraftActionsComponent } from './draft-actions/draft-actions.component';
import { TitleComponent } from './title/title.component';
import { tinydraftRoutes } from './app.routes';
import { EditorComponent } from './editor/editor.component';
import { DraftResolve, EmptyDraftResolve, DraftsListResolve } from './drafts.resolve';
import { DraftsService } from './drafts.service';
import { ElasticModule } from 'angular2-elastic';

@NgModule({
  declarations: [
    AppComponent,
    DraftComponent,
    DraftslistComponent,
    DraftActionsComponent,
    TitleComponent,
    EditorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(tinydraftRoutes),
    FlexLayoutModule,
    ElasticModule,
  ],
  providers: [
    DraftResolve,
    DraftsListResolve,
    EmptyDraftResolve,
    DraftsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
