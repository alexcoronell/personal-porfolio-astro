import { writable } from "svelte/store";

import type { Experience } from "@interfaces/Experience";

import { experiences } from "@data/experiences.data";
import { experiencias } from "@data/experiencias.data";

const isVisibleModal = writable<boolean>(false);
const showModal = () => isVisibleModal.set(true);
const hideModal = () => isVisibleModal.set(false);

const isVisibleModalExperience = writable<boolean>(false);
const showModalExperience = () => isVisibleModalExperience.set(true);
const hideModalExperience = () => isVisibleModalExperience.set(false);

const experiencesDataStore = writable<Experience[]>([]);
const currentExperienceStoreIndex = writable<number>(0);
const currentExperienceStore = writable<Experience | null>(null);

const setExperiencesData = (lang: string) => {
  if (lang === "es") {
    experiencesDataStore.set(experiencias);
  } else {
    experiencesDataStore.set(experiences);
  }
};

const setCurrentExperience = (index: number) => {
  currentExperienceStoreIndex.set(index);
  experiencesDataStore.subscribe((experiences) => {
    currentExperienceStore.set(experiences[index]);
  });
};

export {
  isVisibleModal,
  showModal,
  hideModal,
  isVisibleModalExperience,
  showModalExperience,
  hideModalExperience,
  experiencesDataStore,
  currentExperienceStoreIndex,
  currentExperienceStore,
  setExperiencesData,
  setCurrentExperience,
};
