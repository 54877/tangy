import type { RuleSet } from "styled-components";
import { breakpoints } from "../tokens/breakpoints";

// lg: "1320px"
// md: "1024px"
// sm: "768px"
// xs: "375px"
export const media = {
  xs: `@media (min-width: ${breakpoints.xs})`,
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
};

type BreakpointKey = keyof typeof breakpoints;
export type Responsive<T> = T | Partial<Record<BreakpointKey, T>>;

//元件用
export const responsiveStyle = <T extends string>(
  property: string,
  value: T | Partial<Record<string, T>>,
  breakpoints: Record<string, string>,
  transform?: (v: T) => string | RuleSet<object>,
) => {
  if (typeof value !== "object" || value === null) {
    return `${property}: ${transform ? transform(value as T) : value};`;
  }

  return Object.entries(value as Record<string, T>)
    .map(([bp, v]) => {
      const finalValue = transform ? transform(v) : v;

      if (bp === "xs") {
        return `${property}: ${finalValue};`;
      }

      return `
        @media (min-width: ${breakpoints[bp]}) {
          ${property}: ${finalValue};
        }
      `;
    })
    .join("");
};
