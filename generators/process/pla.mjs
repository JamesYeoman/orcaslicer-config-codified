import * as printers from "../machine/qOnePro.mjs";
import processBase from "./base.json" with { type: "json" };
import pointFourBase from "./base_pointfour.json" with { type: "json" };
import pointEightBase from "./base_pointeight.json" with { type: "json" };

import { numHalf } from "../utils.mjs";

export const pointFour = {
  ...processBase,
  ...pointFourBase,

  name: "0.20mm @Q1 Pro 0.4mm - PLA",
  print_settings_id: "0.20mm @Q1 Pro 0.4mm - PLA",
  inherits: "0.20mm Standard @Qidi Q1 Pro",
  compatible_printers: [printers.printer_pointfour_mm.printer_settings_id],

  gap_infill_speed: "60",
  initial_layer_infill_speed: "80",
  internal_solid_infill_speed: "100",
  sparse_infill_speed: "100",

  initial_layer_speed: "60",

  inner_wall_speed: "100",
  outer_wall_speed: "80",

  small_perimeter_speed: "60",
  top_surface_speed: "80",

  support_speed: "100",

  bridge_speed: "80",
  internal_bridge_speed: "80",
};

export const pointEight = {
  ...processBase,
  ...pointEightBase,

  name: "0.40mm @Q1 Pro 0.8mm - PLA",
  print_settings_id: "0.40mm @Q1 Pro 0.8mm - PLA",
  inherits: "0.40mm Standard @Qidi Q1 Pro 0.8 nozzle",
  compatible_printers: [printers.printer_pointeight_mm.printer_settings_id],

  gap_infill_speed: numHalf(pointFour.gap_infill_speed),
  initial_layer_infill_speed: numHalf(pointFour.initial_layer_infill_speed),
  internal_solid_infill_speed: numHalf(pointFour.internal_solid_infill_speed),
  sparse_infill_speed: numHalf(pointFour.sparse_infill_speed),

  initial_layer_speed: numHalf(pointFour.initial_layer_speed),

  inner_wall_speed: numHalf(pointFour.inner_wall_speed),
  outer_wall_speed: numHalf(pointFour.outer_wall_speed),

  small_perimeter_speed: numHalf(pointFour.small_perimeter_speed),
  top_surface_speed: numHalf(pointFour.top_surface_speed),

  support_speed: numHalf(pointFour.support_speed),

  bridge_speed: numHalf(pointFour.bridge_speed),
  internal_bridge_speed: numHalf(pointFour.internal_bridge_speed),
};
