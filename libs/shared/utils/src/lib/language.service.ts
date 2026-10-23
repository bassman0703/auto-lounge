import { Injectable, signal } from '@angular/core';

export type SiteLanguage = 'ka' | 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly current = signal<SiteLanguage>('ka');

  toggle(): void {
    this.current.update((lang) => lang === 'ka' ? 'en' : 'ka');
  }

  setLanguage(lang: SiteLanguage): void {
    this.current.set(lang);
  }
}
