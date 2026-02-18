import { ui, defaultLang } from './ui';

export const getLangFromUrl = (url: URL) => {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
};

export const useTranslations = (lang: keyof typeof ui) => {
  return function t(key: string) {
    const keys = key.split('.');
    let value: Record<string, unknown> | string | undefined = ui[lang];

    for (const k of keys) {
      if (typeof value === 'object' && value !== null) {
        value = value[k] as Record<string, unknown> | string | undefined;
      } else {
        value = undefined;
        break;
      }
    }

    // Fallback to default language if key not found
    if (value === undefined) {
      value = ui[defaultLang];
      for (const k of keys) {
        if (typeof value === 'object' && value !== null) {
          value = value[k] as Record<string, unknown> | string | undefined;
        } else {
          value = undefined;
          break;
        }
      }
    }

    return value || key;
  };
};
