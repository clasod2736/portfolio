import { ReactNode } from "react";

// Logo Animation
export interface TrailProps {
  open: boolean;
  children: ReactNode;
}

// Chidren for context provider
export type Children = {
  children: ReactNode;
};

// Type for Blur context provider
export type BlurValue = {
  blur: boolean;
  handleBlur: () => void;
};
