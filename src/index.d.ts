export type ExperienceStep = {
  name: string;
  description: string;
};

export type ExperienceType = {
  level: number;
  description: string;
  steps: ExperienceStep[];
};
