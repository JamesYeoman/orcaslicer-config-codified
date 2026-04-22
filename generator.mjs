import * as machine from "./generators/machine.mjs";
import * as filament from "./generators/filament.mjs";
import * as genProcess from "./generators/process.mjs";
import { ensureClean } from "./generators/utils.mjs";

const outputFolder = ensureClean(
  // Make sure this points to the correct location for you!
  `~/.var/app/io.github.softfever.OrcaSlicer/config/OrcaSlicer/user/default`,
);

machine.write(outputFolder);
filament.write(outputFolder);
genProcess.write(outputFolder);
