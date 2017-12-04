import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LOCALE_ID } from '@angular/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
const options = {
  Providers:
    [
      {
        provide: LOCALE_ID, useValue: 'de_CH'
      }
    ]
};

platformBrowserDynamic().bootstrapModule(AppModule, options)
  .catch(err => console.log(err));
