import { writable } from "svelte/store";

import type { Experience } from "@interfaces/Experience";

import { experiences } from "@data/experiences.data";

const isVisibleModal = writable<boolean>(false);
const showModal = () => isVisibleModal.set(true);
const hideModal = () => isVisibleModal.set(false);

const isVisibleModalExperience = writable<boolean>(false);
const showModalExperience = () => isVisibleModal.set(true);
const hideModalExperience = () => isVisibleModal.set(false);

const experiencesDataStore = writable<Experience[]>(experiences);
const currentExperienceStore = writable<Experience | null>(null);

export {
  isVisibleModal,
  showModal,
  hideModal,
  isVisibleModalExperience,
  showModalExperience,
  hideModalExperience,
  experiencesDataStore,
  currentExperienceStore,
};
