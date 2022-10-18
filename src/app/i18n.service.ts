import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class I18nService {

  private userLang;

  constructor() {
    this.userLang = window.navigator.language;
  }

  public getCurrencyCode(): string {
    switch (this.userLang) {
      default:
      case 'pl-PL': return 'PLN';
      case 'en-US': return 'USD';
      case 'en-EN': return 'GBP';
    }
  }
}
