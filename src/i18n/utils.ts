import { ui, uiMenu, type NavKey, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getLocalizatedUrl() {
  const currentUrl = new URL(window.location.href);
  let pathname = currentUrl.pathname;
  const [, pathNameArrow] = currentUrl.pathname.split('/');
  let currentLang: keyof typeof uiMenu = 'es';
  let toLang: keyof typeof uiMenu = 'en';

  if (pathNameArrow && (pathNameArrow === 'en' || pathNameArrow === '/en')) {
    currentLang = 'en';
    toLang = 'es';
  }

  const entry = Object.entries(uiMenu[currentLang]).find(
    ([key, value]) => key.endsWith('.url') && value === `${pathname}`
  );

  const keyPrefix = entry?.[0].replace('.url', '') as NavKey;
  const targetUrl = uiMenu[toLang][`${keyPrefix}.url`] || '/';

  window.location.href = targetUrl;
}
