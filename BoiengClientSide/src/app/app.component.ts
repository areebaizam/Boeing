import { Component } from '@angular/core';

@Component({
  selector: 'bng-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'Notes';
}
