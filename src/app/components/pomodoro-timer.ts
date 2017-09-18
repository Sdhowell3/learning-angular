import {Component} from '@angular/core';
import template from './pomodoro-timer.pug';

@Component({
  selector: 'pomodoro-timer',
  template: template()
})
export class PomodoroTimer{
  minutes: number;
  seconds: number;
  constructor() {
    this.minutes = 24;
    this.seconds = 59;
  }
}
