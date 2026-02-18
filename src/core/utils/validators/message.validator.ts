import { get } from 'svelte/store';
import type { InvalidField } from '@interfaces/invalid-field.interface';
import { currentLanguage } from '../../../stores/store';

export const messageValidator = (value: string): InvalidField => {
  const message = value.trim();
  const lang = get(currentLanguage);
  if (message === '') {
    const message =
      lang === 'es'
        ? 'El mensaje es requerido'
        : 'The message field is required';
    return {
      invalid: true,
      message,
    };
  } else if (message.length < 10) {
    const message =
      lang === 'es'
        ? 'Debe tener al menos 10 caracteres'
        : 'Minimum length: 10 characters';
    return {
      invalid: true,
      message,
    };
  } else {
    return {
      invalid: false,
      message: '',
    };
  }
};
