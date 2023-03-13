import type { FC, HTMLProps } from "react";
import type { Children } from "types";

export interface MainLayoutProps extends HTMLProps<HTMLDivElement> {
  children: Children;
  title: string;
  pageDescription?: string;
  withoutNavbar?: boolean;
  contentClassName?: string;
}
export type MainLayoutType = FC<MainLayoutProps>;
