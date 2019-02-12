import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'frontend200';
  // title = 'Front End Web with Angular 200';
  sub = 'Progressive ITU Angular';

  makeUpper() {
    this.sub = this.sub.toUpperCase();
  }
}
