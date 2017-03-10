import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    '../../node_modules/normalize-css/normalize.css',
    '../../node_modules/basscss/css/basscss.min.css',
    './app.component.css',
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app works!';
}
