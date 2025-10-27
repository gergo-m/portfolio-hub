export const FIELD = {
  main: "main",
  development: "development",
  filmmaking: "filmmaking",
  university: "university",
} as const;

export type Field = (typeof FIELD)[keyof typeof FIELD];
