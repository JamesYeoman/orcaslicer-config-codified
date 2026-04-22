import { ensureClean, writeToFolder } from "./utils.mjs";

import * as pcGeneric from "./filament/generic_PC.mjs";
import * as petgGeneric from "./filament/generic_PETG.mjs";
import * as plaGeneric from "./filament/generic_PLA.mjs";
import * as tpuGeneric from "./filament/generic_TPU.mjs";

import * as pcESUN from "./filament/eSUN_PC.mjs";
import * as petgESUN from "./filament/eSUN_PETG.mjs";
import * as plaQidi from "./filament/Qidi_PLA.mjs";
import * as plaSunluRapid from "./filament/Sunlu_Rapid_PLA.mjs";

export const write = (outputFolder) => {
  const filamentFolder = ensureClean(outputFolder, "filament");

  writeToFolder(filamentFolder, {
    pcGeneric,
    petgGeneric,
    plaGeneric,
    tpuGeneric,

    pcESUN,
    petgESUN,
    plaQidi,
    plaSunluRapid,
  });
};
