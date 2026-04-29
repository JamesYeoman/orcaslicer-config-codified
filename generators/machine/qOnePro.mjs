import * as gcodes from "./gcodes.mjs";

import { ensureClean, writeToFolder } from "../utils.mjs";

const base = {
  thumbnails: ["300x300/PNG", "96x96/PNG"],

  print_host: "http://mkspi.lan",

  ...gcodes,

  emit_machine_limits_to_gcode: "0",
  enable_filament_ramming: "0",
  fan_speedup_overhangs: "0",
  fan_speedup_time: "1",
  manual_filament_change: "1",
  purge_in_prime_tower: "0",

  machine_max_acceleration_extruding: ["6600"],
  machine_max_acceleration_retracting: ["6600"],
  machine_max_acceleration_x: ["6600"],
  machine_max_acceleration_y: ["6600"],

  retract_when_changing_layer: ["0"],
  travel_slope: ["90"],
  wipe: ["0"],
  z_hop: ["0.2"],
};

export const printer_pointfour_mm = {
  ...base,

  name: "Qidi Q1 Pro 0.4 nozzle - Base",
  inherits: "Qidi Q1 Pro 0.4 nozzle",
  printer_settings_id: "Qidi Q1 Pro 0.4 nozzle - Base",

  max_layer_height: ["0.3"],
  min_layer_height: ["0.1"],
};

export const printer_pointeight_mm = {
  ...base,

  name: "Qidi Q1 Pro 0.8 nozzle - Base",
  inherits: "Qidi Q1 Pro 0.8 nozzle",
  printer_settings_id: "Qidi Q1 Pro 0.8 nozzle - Base",

  max_layer_height: ["0.6"],
  min_layer_height: ["0.2"],

  retraction_length: ["0.8"],

  z_hop: ["0.4"],
};
