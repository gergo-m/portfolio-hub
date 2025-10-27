import { FIELD, type Field } from "./fields";

export const TAG = {
  web: "web",
  game: "game",
  js: "js",
  python: "python",
  short: "short",
  long: "long",
  english: "english",
  hungarian: "hungarian",
  development: "development",
  filmmaking: "filmmaking",
  university: "university",
  environmental: "environmental",
  raisingAwareness: "raising-awareness",
  digital: "digital",
  hobby: "hobby",
  personal: "personal",
} as const;

export type TagId = (typeof TAG)[keyof typeof TAG];

export const TAGS: Record<
  TagId,
  {
    label: string;
    colorDark: string;
    colorLight: string;
    fields: Field[];
  }
> = {
  [TAG.short]: {
    label: "Short",
    colorDark: "hsl(214, 34%, 20%)",
    colorLight: "hsl(215, 32%, 93%)",
    fields: [FIELD.filmmaking],
  },
  [TAG.long]: {
    label: "Long",
    colorDark: "hsl(214, 34%, 20%)",
    colorLight: "hsl(215, 32%, 93%)",
    fields: [FIELD.filmmaking],
  },
  [TAG.english]: {
    label: "English",
    colorDark: "hsl(214, 34%, 20%)",
    colorLight: "hsl(215, 32%, 93%)",
    fields: [FIELD.filmmaking],
  },
  [TAG.hungarian]: {
    label: "Hungarian",
    colorDark: "hsl(214, 34%, 20%)",
    colorLight: "hsl(215, 32%, 93%)",
    fields: [FIELD.filmmaking],
  },
  [TAG.development]: {
    label: "Development",
    colorDark: "hsl(214, 34%, 20%)",
    colorLight: "hsl(215, 32%, 93%)",
    fields: [FIELD.main, FIELD.filmmaking, FIELD.university],
  },
  [TAG.filmmaking]: {
    label: "Filmmaking",
    colorDark: "hsl(214, 34%, 20%)",
    colorLight: "hsl(215, 32%, 93%)",
    fields: [FIELD.main, FIELD.development, FIELD.university],
  },
  [TAG.university]: {
    label: "University",
    colorDark: "hsl(214, 34%, 20%)",
    colorLight: "hsl(215, 32%, 93%)",
    fields: [FIELD.main, FIELD.development, FIELD.filmmaking],
  },
  [TAG.environmental]: {
    label: "Environmental",
    colorDark: "hsl(214, 34%, 20%)",
    colorLight: "hsl(215, 32%, 93%)",
    fields: [FIELD.filmmaking],
  },
  [TAG.raisingAwareness]: {
    label: "Raising awareness",
    colorDark: "hsl(214, 34%, 20%)",
    colorLight: "hsl(215, 32%, 93%)",
    fields: [FIELD.filmmaking],
  },
  [TAG.web]: {
    label: "Web",
    colorDark: "hsl(214, 34%, 20%)",
    colorLight: "hsl(215, 32%, 93%)",
    fields: [FIELD.development],
  },
  [TAG.game]: {
    label: "Game",
    colorDark: "hsl(214, 34%, 20%)",
    colorLight: "hsl(215, 32%, 93%)",
    fields: [FIELD.development],
  },
  [TAG.js]: {
    label: "JS",
    colorDark: "hsl(214, 34%, 20%)",
    colorLight: "hsl(215, 32%, 93%)",
    fields: [FIELD.development],
  },
  [TAG.python]: {
    label: "Python",
    colorDark: "hsl(214, 34%, 20%)",
    colorLight: "hsl(215, 32%, 93%)",
    fields: [FIELD.development],
  },
  [TAG.digital]: {
    label: "Digital",
    colorDark: "hsl(214, 34%, 20%)",
    colorLight: "hsl(215, 32%, 93%)",
    fields: [FIELD.main],
  },
  [TAG.hobby]: {
    label: "Hobby",
    colorDark: "hsl(214, 34%, 20%)",
    colorLight: "hsl(215, 32%, 93%)",
    fields: [FIELD.main, FIELD.development, FIELD.filmmaking],
  },
  [TAG.personal]: {
    label: "Personal",
    colorDark: "hsl(214, 34%, 20%)",
    colorLight: "hsl(215, 32%, 93%)",
    fields: [FIELD.main, FIELD.development, FIELD.filmmaking],
  },
};

export const TAGS_BY_FIELD = (field: Field, allTags?: TagId[]): TagId[] => {
  const all = Object.entries(TAGS)
    .filter(([_, t]) => t.fields.includes(field) || t.fields.length === 0)
    .map(([id]) => id as TagId);

  return allTags && allTags.length ? all.filter((id) => allTags.includes(id)) : all;
};
