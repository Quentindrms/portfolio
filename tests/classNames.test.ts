import { describe, it, expect } from "vitest";
import {
  getHeadingLevelClass,
  getTextLevelClass,
  getLinkLevelClass,
  getBoldClass,
  headingLevelClasses,
  textLevelClasses,
  linkLevelClasses,
  boldClasses,
} from "../utils/classNames";

describe("getHeadingLevelClass", () => {
  it("retourne la classe pour chaque niveau de 1 à 6", () => {
    expect(getHeadingLevelClass(1)).toBe("text-6xl");
    expect(getHeadingLevelClass(2)).toBe("text-5xl");
    expect(getHeadingLevelClass(3)).toBe("text-4xl");
    expect(getHeadingLevelClass(4)).toBe("text-3xl");
    expect(getHeadingLevelClass(5)).toBe("text-2xl");
    expect(getHeadingLevelClass(6)).toBe("text-xl");
  });

  it("retourne le niveau 1 par défaut quand undefined", () => {
    expect(getHeadingLevelClass(undefined)).toBe(headingLevelClasses[1]);
  });
});

describe("getTextLevelClass", () => {
  it("retourne la classe pour chaque niveau de 1 à 5", () => {
    expect(getTextLevelClass(1)).toBe("text-3xl md:text-5xl");
    expect(getTextLevelClass(2)).toBe("text-2xl md:text-4xl");
    expect(getTextLevelClass(3)).toBe("text-xl md:text-3xl");
    expect(getTextLevelClass(4)).toBe("text-lg md:text-2xl");
    expect(getTextLevelClass(5)).toBe("text-md md:text-xl");
  });

  it("retourne le niveau 1 par défaut quand undefined", () => {
    expect(getTextLevelClass(undefined)).toBe(textLevelClasses[1]);
  });
});

describe("getLinkLevelClass", () => {
  it("retourne la classe pour chaque niveau de 1 à 3", () => {
    expect(getLinkLevelClass(1)).toBe("text-5xl");
    expect(getLinkLevelClass(2)).toBe("text-4xl");
    expect(getLinkLevelClass(3)).toBe("text-3xl");
  });

  it("retourne le niveau 3 par défaut quand undefined", () => {
    expect(getLinkLevelClass(undefined)).toBe(linkLevelClasses[3]);
  });
});

describe("getBoldClass", () => {
  it("retourne la classe pour chaque valeur de bold", () => {
    expect(getBoldClass("light")).toBe("font-light");
    expect(getBoldClass("regular")).toBe("font-regular");
    expect(getBoldClass("bold")).toBe("font-bold");
    expect(getBoldClass("extra-bold")).toBe("font-extrabold");
    expect(getBoldClass("black")).toBe("font-black");
  });

  it("retourne 'regular' par défaut quand undefined", () => {
    expect(getBoldClass(undefined)).toBe(boldClasses["regular"]);
  });
});
