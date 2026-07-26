import type { ReactNode } from "react";

export type NavigationItem = {
  label: string;
  href: string;
  featured?: boolean;
};

export type SiteContent = {
  name: string;
  descriptor: string;
  description: string;
  contact: {
    email: string;
    phone: string;
    location: string;
  };
};

export type ComponentWithChildren = {
  children: ReactNode;
  className?: string;
};
