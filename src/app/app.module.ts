import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import './rxjs-extensions';

import { AppComponent } from './app.component';
import { AppRoutingModule, routableComponents } from './app-routing.module';
import { CouponModule } from './coupon/coupon.module';
import { FooterComponent } from './navigation/footer/footer.component';
import { HeaderComponent } from './navigation/header/header.component';
import { OrderModule } from './order/order.module';
import { OrderService } from "./order.service";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routableComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CouponModule,
    OrderModule,
    HttpModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        // useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
