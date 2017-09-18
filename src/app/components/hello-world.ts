import {Component} from '@angular/core';
import template from './hello-world.pug';

@Component({
  selector: 'hello-world',
  template: template()
})
export class HelloWorld{
  greeting: string;
  constructor() {
    this.greeting = 'Hello Angular 2!';
  }
}
