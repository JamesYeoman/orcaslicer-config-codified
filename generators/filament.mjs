import { readdirSync, mkdirSync } from "node:fs";

import { writeToFolder } from "./utils.mjs";

export const write = async (outputFolder) => {
  mkdirSync(`${outputFolder}/filament`);

  const files = readdirSync(`${import.meta.dirname}/filament`);

  for (const file of files) {
    if (!file.endsWith(".mjs")) continue;

    const filaments = await import(`${import.meta.dirname}/filament/${file}`);
    writeToFolder(`${outputFolder}/filament`, filaments);
  }
};
