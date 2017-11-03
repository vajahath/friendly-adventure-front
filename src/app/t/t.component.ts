import { Component } from '@angular/core';

@Component({
  selector: 'app-test-component',
  template: `
    <p>{{title}}</p>
  `
})

export class TestComponent {
  title = 'Test component';
}
