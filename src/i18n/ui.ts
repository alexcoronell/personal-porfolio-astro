import { presentation } from '@data/index';

export const languages = {
  en: 'English',
  es: 'Spanish',
};

export const defaultLang = 'en';

export type NavKey =
  | 'nav.about'
  | 'nav.skills'
  | 'nav.learning'
  | 'nav.works'
  | 'nav.experiences'
  | 'nav.contact';

export const uiMenu = {
  en: {
    'nav.about': 'about',
    'nav.skills': 'skills',
    'nav.learning': 'learning',
    'nav.works': 'works',
    'nav.experiences': 'experiences',
    'nav.contact': 'contact',
  },
  es: {
    'nav.about': 'acerca',
    'nav.skills': 'skills',
    'nav.learning': 'aprendiendo',
    'nav.works': 'portafolio',
    'nav.experiences': 'experiencia',
    'nav.contact': 'contacto',
  },
};

export const ui = {
  en: {
    nav: uiMenu.en,
    presentation: presentation.en,
  },
  es: {
    nav: uiMenu.es,
    presentation: presentation.es,
  },
};
