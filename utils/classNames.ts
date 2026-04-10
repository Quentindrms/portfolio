export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type BoldValue = "light" | "regular" | "bold" | "extra-bold" | "black";
export type TextLevel = 1 | 2 | 3 | 4 | 5;
export type LinkLevel = 1 | 2 | 3;

export const headingLevelClasses: Record<HeadingLevel, string> = {
  1: "text-6xl",
  2: "text-5xl",
  3: "text-4xl",
  4: "text-3xl",
  5: "text-2xl",
  6: "text-xl",
};

export const textLevelClasses: Record<TextLevel, string> = {
  1: "text-3xl md:text-5xl",
  2: "text-2xl md:text-4xl",
  3: "text-xl md:text-3xl",
  4: "text-lg md:text-2xl",
  5: "text-md md:text-xl",
};

export const linkLevelClasses: Record<LinkLevel, string> = {
  1: "text-5xl",
  2: "text-4xl",
  3: "text-3xl",
};

export const boldClasses: Record<BoldValue, string> = {
  light: "font-light",
  regular: "font-regular",
  bold: "font-bold",
  "extra-bold": "font-extrabold",
  black: "font-black",
};

export function getHeadingLevelClass(level: HeadingLevel | undefined): string {
  return headingLevelClasses[level ?? 1];
}

export function getTextLevelClass(level: TextLevel | undefined): string {
  return textLevelClasses[level ?? 1];
}

export function getLinkLevelClass(level: LinkLevel | undefined): string {
  return linkLevelClasses[level ?? 3];
}

export function getBoldClass(bold: BoldValue | undefined): string {
  return boldClasses[bold ?? "regular"];
}
