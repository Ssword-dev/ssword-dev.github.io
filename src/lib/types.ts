import React from "react";
export type SuperElementProps<P, B extends keyof HTMLElementTagNameMap> = P &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElementTagNameMap[B]>,
    HTMLElementTagNameMap[B]
  >;
