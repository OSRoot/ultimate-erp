import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private renderer: Renderer2;
//_______________________________________________________________________________________//
  constructor(
    private translate: TranslateService,
    private rendererFactory: RendererFactory2
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

//_______________________________________________________________________________________//
initTranslate() {
    const savedLang = localStorage.getItem('lang') || 'ja'; // Default to 'en' if no language is saved
    console.log('Saved language:', savedLang);
    this.translate.setDefaultLang(savedLang);
    this.changeLang(savedLang); // Ensure language and direction are set correctly

  }
//_______________________________________________________________________________________//

changeLang(lang: string) {
  if (!['en', 'ar', 'ja'].includes(lang)) {
    console.warn(`Unsupported language: ${lang}, defaulting to English`);
    lang = 'en';
  }
  this.translate.use(lang).subscribe({
    next: () => console.log(`Language changed to ${lang}`),
    error: (err) => console.error(`Error changing language to ${lang}`, err),
  });
  localStorage.setItem('lang', lang);

  // Direction setting (Japanese is LTR, like English)
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelector('ion-content')?.classList.add('hidden');
  document.documentElement.setAttribute('dir', dir);
  document.querySelector('html')?.setAttribute('dir', dir);

  // Fonts (optional: add Japanese font fallback)
  const root = document.documentElement;
  if (lang === 'ar') {
    root.style.setProperty('--ion-font-family', 'var(--ion-font-family-arabic)');
    root.style.setProperty('--ion-font-family-bold', 'var(--ion-font-family-bold-arabic)');
  } else if (lang === 'ja') {
    root.style.setProperty('--ion-font-family', '"Noto Sans JP", sans-serif');
    root.style.setProperty('--ion-font-family-bold', '"Noto Sans JP Bold", sans-serif');
  } else {
    root.style.setProperty('--ion-font-family', '"regular", sans-serif');
    root.style.setProperty('--ion-font-family-bold', '"bold", sans-serif');
  }
}


//_______________________________________________________________________________________//
getLang(): string {
    return localStorage.getItem('lang') || 'en';
  }

//_______________________________________________________________________________________//
translateByKey(key: string): string {
    return key ? this.translate.instant(key) : '';
  }
}
