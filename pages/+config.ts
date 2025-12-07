import type { Config } from "vike/types";
import vikeSolid from "vike-solid/config";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/head-tags
  title: "Portfolio - Quentin Derimais",
  description: "Quentin Derimais, développeur fullstack",

  extends: [vikeSolid],
} satisfies Config;
