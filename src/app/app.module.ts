import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DraftComponent } from './draft/draft.component';
import { DraftslistComponent } from './draftslist/draftslist.component';
import { DraftMetadataComponent } from './draft-metadata/draft-metadata.component';

@NgModule({
  declarations: [
    AppComponent,
    DraftComponent,
    DraftslistComponent,
    DraftMetadataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
