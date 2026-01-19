export interface PersonalData {
  shortname: string;
  fullName: string;
  image: string;
  githubPage: string;
  site: string;
  email: string;
  email2: string;
  email3: string;
  whatsapp: string;
  whatsappClean: string;
  whatsapp2: string;
  whatsappClean2: string;
  linkedin: string;
  github: string;
  gitlab: string;
  shortPresentation: string;
  titleLongPresentation: string;
  longPresentation: string[];
  works: Work[];
  experiences: Experience[];
}
export interface Work {
  title: string;
  status: Status;
  publicCode: boolean;
  url: string;
  codeUrl: string;
  image: string;
  technologies: string[];
}

export interface Experience {
  order: number;
  title: string;
  business: string;
  dateBegin: string;
  dateEnd: string;
  location: string;
  functions?: string[];
}

export type Status = 'active' | 'inactive' | 'Developing';
