import type { ContactForm } from '../interfaces/ContactForm.interface';

const urlGooglesheet =
  'https://script.google.com/macros/s/AKfycbyGfKreQZAVi0gOI660JX4DnDmYvXb_7oXvQL4rNxv0Gqv1NXZN18dfFr7LnvqGTO-A/exec';

export const sendContactUsMessage = async (contactMessage: ContactForm) => {
  const formData = new FormData();
  formData.append('fullname', contactMessage.fullname);
  formData.append('email', contactMessage.email);
  formData.append('message', contactMessage.message);
  formData.append('language', contactMessage.language);
  return await fetch(urlGooglesheet, { method: 'POST', body: formData });
};
