import 'reflect-metadata';
import 'zone.js/dist/zone';
import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './AppModule';

if(process.env.NODE_ENV==='production') enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
