export type UseCase = {
  title: string;
  description: string;
  example: string;
  category: string;
};

export type Material = {
  name: string;
  recommendedUse: string;
  advantages: string[];
  note?: string;
};

export type GalleryWork = {
  name: string;
  type: string;
  description: string;
  visual: "figure" | "support" | "part" | "keyring" | "organizer" | "prototype";
};

export type ReferencePrice = {
  title: string;
  reference: string;
  detail: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type FileRequirement = {
  title: string;
  description: string;
};

export type LaserExample = {
  name: string;
  type: string;
  description: string;
  visual: "sign" | "keyring" | "logo" | "box" | "tag" | "assembly";
};
