import * as machine from "./generators/machine.mjs";
import * as filament from "./generators/filament.mjs";
import * as genProcess from "./generators/process.mjs";

const outputFolder = `${import.meta.dirname}/output`;

machine.write(outputFolder);
filament.write(outputFolder);
genProcess.write(outputFolder);
