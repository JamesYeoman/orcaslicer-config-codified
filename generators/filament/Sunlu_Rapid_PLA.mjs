import * as generic from "./generic_PLA.mjs";

const sunluBase = {
  filament_vendor: ["Sunlu"],

  default_filament_colour: ["#000000"],

  filament_cost: ["12.99"],
  filament_retraction_speed: ["40"],

  slow_down_layer_time: ["5"],
};

export const pointFour = {
  ...generic.rapidPointFour,
  ...sunluBase,

  name: "Sunlu Rapid PLA @ Q1 Pro 0.4mm",
  inherits: "QIDI PLA Rapido @Qidi Q1 Pro 0.4 nozzle",
  filament_settings_id: ["Sunlu Rapid PLA @ Q1 Pro 0.4mm"],

  pressure_advance: ["0.045"],
};

export const pointEight = {
  ...generic.rapidPointEight,
  ...sunluBase,

  name: "Sunlu Rapid PLA @ Q1 Pro 0.8mm",
  inherits: "QIDI PLA Rapido @Qidi Q1 Pro 0.8 nozzle",
  filament_settings_id: ["Sunlu Rapid PLA @ Q1 Pro 0.8mm"],
};
