import { readdirSync, mkdirSync } from "node:fs";

import { writeToFolder } from "./utils.mjs";

export const write = async (outputFolder) => {
  mkdirSync(`${outputFolder}/process`);

  const files = readdirSync(`${import.meta.dirname}/process`);

  for (const file of files) {
    if (!file.endsWith(".mjs")) continue;

    const processes = await import(`${import.meta.dirname}/process/${file}`);
    writeToFolder(`${outputFolder}/process`, processes);
  }
};
