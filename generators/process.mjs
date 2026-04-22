import { ensureClean, writeToFolder } from "./utils.mjs";

import * as pc from "./process/pc.mjs";
import * as petg from "./process/petg.mjs";
import * as pla from "./process/pla.mjs";
import * as plaRapido from "./process/plaRapido.mjs";
import * as tpu from "./process/tpu.mjs";

export const write = (outputFolder) => {
  const processFolder = ensureClean(outputFolder, "process");

  writeToFolder(processFolder, { pc, petg, pla, plaRapido, tpu });
};
