import type { Status } from '@types/status.type';

export interface Work {
  title: string;
  status: Status;
  publicCode: boolean;
  url: string;
  codeUrl: string | null;
  image: string;
  technologies: string[];
}
