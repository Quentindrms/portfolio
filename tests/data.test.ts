import { describe, it, expect, vi, beforeAll } from "vitest";

// Mock des imports d'images avant l'import du module
vi.mock("../assets/images/screenshots/dinopark.png", () => ({ default: "dinopark.png" }));
vi.mock("../assets/images/screenshots/flux-films.png", () => ({ default: "flux-films.png" }));
vi.mock("../assets/images/screenshots/space-invader.png", () => ({ default: "space-invader.png" }));
vi.mock("../assets/images/illustrations/github.svg", () => ({ default: "github.svg" }));
vi.mock("../assets/images/illustrations/linkedin.svg", () => ({ default: "linkedin.svg" }));

const { hardSkills, softSkills, project, contacts } = await import("../data/data");

describe("hardSkills", () => {
  it("est un tableau non vide", () => {
    expect(Array.isArray(hardSkills)).toBe(true);
    expect(hardSkills.length).toBeGreaterThan(0);
  });

  it("contient uniquement des chaînes", () => {
    hardSkills.forEach((skill) => expect(typeof skill).toBe("string"));
  });
});

describe("softSkills", () => {
  it("est un tableau non vide", () => {
    expect(Array.isArray(softSkills)).toBe(true);
    expect(softSkills.length).toBeGreaterThan(0);
  });

  it("contient uniquement des chaînes", () => {
    softSkills.forEach((skill) => expect(typeof skill).toBe("string"));
  });
});

describe("project", () => {
  it("est un tableau non vide", () => {
    expect(Array.isArray(project)).toBe(true);
    expect(project.length).toBeGreaterThan(0);
  });

  it("chaque projet a les champs requis", () => {
    project.forEach((p) => {
      expect(typeof p.nom).toBe("string");
      expect(typeof p.description).toBe("string");
      expect(Array.isArray(p.technologies)).toBe(true);
      expect(typeof p.github).toBe("string");
      expect(p.github).toMatch(/^https:\/\//);
      expect(p.image).toBeTruthy();
    });
  });

  it("les technologies sont des tableaux de chaînes", () => {
    project.forEach((p) => {
      p.technologies.forEach((tech) => expect(typeof tech).toBe("string"));
    });
  });
});

describe("contacts", () => {
  it("est un tableau non vide", () => {
    expect(Array.isArray(contacts)).toBe(true);
    expect(contacts.length).toBeGreaterThan(0);
  });

  it("chaque contact a les champs requis", () => {
    contacts.forEach((c) => {
      expect(typeof c.name).toBe("string");
      expect(typeof c.alt).toBe("string");
      expect(c.image).toBeTruthy();
      expect(typeof c.lien).toBe("string");
      expect(c.lien).toMatch(/^https:\/\//);
    });
  });
});
