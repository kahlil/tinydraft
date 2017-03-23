import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DraftComponent } from './draft/draft.component';
import { DraftslistComponent } from './draftslist/draftslist.component';
import { DraftActionsComponent } from './draft-actions/draft-actions.component';
import { TitleComponent } from './title/title.component';
import { tinydraftRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    DraftComponent,
    DraftslistComponent,
    DraftActionsComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(tinydraftRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
