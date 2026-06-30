import { css, type RuleSet } from "styled-components";
import { breakpoints } from "../tokens/breakpoints";

// lg: "1320px"
// md: "1024px"
// sm: "869px"
// xs: "375px"
// xsLg: "425px"
export const media = {
  xs: `@media (min-width: ${breakpoints.xs})`,
  xsLg: `@media (min-width: ${breakpoints.xsLg})`,
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
};

type BreakpointKey = keyof typeof breakpoints;
export type Responsive<T> = T | Partial<Record<BreakpointKey, T>>;

export const responsiveStyle = <T extends string>(
  property: string,
  value: T | Partial<Record<string, T>>,
  breakpoints: Record<string, string>,
  transform?: (v: T) => string | RuleSet<object>,
): RuleSet<object> => {
  if (typeof value !== "object" || value === null) {
    const finalValue = transform ? transform(value) : value;

    return css`
      ${property}: ${finalValue};
    `;
  }

  return Object.entries(value as Record<string, T>)
    .map(([bp, v]) => {
      const finalValue = transform ? transform(v) : v;

      if (bp === "xs") {
        return css`
          ${property}: ${finalValue};
        `;
      }

      return css`
        @media (min-width: ${breakpoints[bp]}) {
          ${property}: ${finalValue};
        }
      `;
    })
    .reduce(
      (acc, cur) => css`
        ${acc}${cur}
      `,
      css``,
    );
};
