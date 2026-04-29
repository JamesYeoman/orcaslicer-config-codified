import * as machine from "./generators/machine.mjs";
import * as filament from "./generators/filament.mjs";
import * as genProcess from "./generators/process.mjs";

import fs from "node:fs";

// Make sure this points to the correct location for you!
const outputFolder = `/home/http501/.var/app/com.orcaslicer.OrcaSlicer/config/OrcaSlicer/user/default`;

fs.rmSync(outputFolder, { force: true, recursive: true });
fs.mkdirSync(outputFolder);

await machine.write(outputFolder);
await filament.write(outputFolder);
await genProcess.write(outputFolder);
