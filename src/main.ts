import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2aSidebarComponent } from './app/components/ng2a-sidebar/ng2a-sidebar.component';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

@NgModule({ 
   declarations: [Ng2aSidebarComponent], 
   imports: [CommonModule], 
   exports: [Ng2aSidebarComponent] 
}) 

export class Ng2aSidebarModule {}