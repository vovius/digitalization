import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dmc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  langMenuOpen: boolean = false;
  currentLanguage: string;
  showShoppingCartBadge: boolean = false;
  orderCount: number = 0;

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'fr', 'it', 'de']);
    // This language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
    // The lang to use, if the lang isn't available, it will use the current loader to get them
    // TODO: select this based on user preferences, cookies and/or url param
    translate.use('en');
    this.currentLanguage = this.translate.currentLang;
  }

  toggleLangMenu(close: boolean) {
    this.langMenuOpen = !this.langMenuOpen;
    if (close) {
      // TODO: refactor to a more Angular way or use the SDX functions
      let element = document.getElementById('flyout-list');
      element.classList.remove('is-open');
      element.style.removeProperty('display');
      let button = document.getElementById('flyout-button');
      button.classList.remove('is-open');
    }

  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLanguage = this.translate.currentLang;
    this.toggleLangMenu(true);
  }

  ngOnInit() {
    // TODO: fetch the order
    this.orderCount = 0 // this.orderService.getOrders().length;
    this.showShoppingCartBadge = this.orderCount > 0;
  }

}
