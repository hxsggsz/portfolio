import { defaultLang, ui } from './ui';

export function getLangFromUrl() {
  const urlLang = new URL(window.location.href);
  const [, lang] = urlLang.pathname.split('/');
  if (lang && lang in ui) return lang as keyof typeof ui;

  return defaultLang;
}

export function useTranslations() {
  const lang = getLangFromUrl();

  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
