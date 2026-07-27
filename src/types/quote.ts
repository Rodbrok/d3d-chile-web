import type { NavigationItem } from "@/types/site";

export type QuoteCard = {
  title: string;
  description: string;
};

export type QuoteService = QuoteCard & {
  examples: string;
  action: NavigationItem;
};

export type QuoteField = {
  label: string;
  placeholder: string;
  kind?: "input" | "select" | "textarea";
};

export type QuoteFaq = {
  question: string;
  answer: string;
};
