import type { NavigationItem } from "@/types/site";

export type ContactChannel = {
  title: string;
  description: string;
  action: NavigationItem;
  note?: string;
  external?: boolean;
};

export type ContactInfo = {
  label: string;
  value: string;
  description: string;
};

export type ContactField = {
  label: string;
  placeholder: string;
  kind?: "input" | "email" | "select" | "textarea";
};

export type ContactTip = {
  title: string;
  description: string;
};

export type ContactFaq = {
  question: string;
  answer: string;
};
