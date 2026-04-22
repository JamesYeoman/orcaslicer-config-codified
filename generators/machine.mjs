import { ensureClean, writeToFolder } from "./utils.mjs";

import * as machines from "./machine/qOnePro.mjs";

export const write = (outputFolder) => {
  const machineFolder = ensureClean(outputFolder, "machine");

  writeToFolder(machineFolder, { machines });
};
