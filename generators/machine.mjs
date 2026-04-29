import { readdirSync, mkdirSync } from "node:fs";

import { writeToFolder } from "./utils.mjs";

export const write = async (outputFolder) => {
  mkdirSync(`${outputFolder}/machine`);

  const files = readdirSync(`${import.meta.dirname}/machine`);

  for (const file of files) {
    if (!file.endsWith(".mjs")) continue;

    const machine = await import(`${import.meta.dirname}/machine/${file}`);
    writeToFolder(`${outputFolder}/machine`, machine);
  }
};
