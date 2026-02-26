import { presentation } from '@data/index';
import { experiences } from '@data/experiences.data';

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
    resumeName: 'Alexander-Coronell-CV-Resume.pdf',
    resumeShortName: 'Resume',
    resumeAriaLabel: 'Download my Resume',
    presentation: presentation.en,
    experiences: experiences.en,
  },
  es: {
    nav: uiMenu.es,
    resumeName: 'Alexander-Coronell-Hoja-de-Vida.pdf',
    resumeShortName: 'Hoja de Vida',
    resumeAriaLabel: 'Descargar mi Hoja de Vida',
    presentation: presentation.es,
    experiences: experiences.es,
  },
};
