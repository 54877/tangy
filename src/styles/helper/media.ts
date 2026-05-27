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
