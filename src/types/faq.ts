export type FaqAction = {
  label: string;
  href: string;
};

export type FaqQuestion = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  id: string;
  title: string;
  shortLabel: string;
  description: string;
  items: FaqQuestion[];
};

export type FaqPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryAction: FaqAction;
    secondaryAction: FaqAction;
    trustMessages: string[];
  };
  quickLinks: {
    eyebrow: string;
    title: string;
    description: string;
  };
  categories: FaqCategory[];
  notice: {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
  };
  finalCta: {
    eyebrow: string;
    title: string;
    description: string;
    primaryAction: FaqAction;
    secondaryAction: FaqAction;
  };
};
