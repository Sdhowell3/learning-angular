import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Main} from './components/main.ts';
import {HelloWorld} from './components/hello-world.ts';
import {PomodoroTimer} from './components/pomodoro-timer.ts';

@NgModule({
  imports: [BrowserModule],
  declarations: [Main,HelloWorld,PomodoroTimer],
  bootstrap: [Main,HelloWorld,PomodoroTimer]
})
export class AppModule{}
