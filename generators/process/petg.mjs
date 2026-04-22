import * as printers from "../machine/qOnePro.mjs";
import processBase from "./base.json" with { type: "json" };
import pointFourBase from "./base_pointfour.json" with { type: "json" };

export const pointFour = {
  ...processBase,
  ...pointFourBase,

  name: "0.20mm @Q1 Pro 0.4mm - PETG",
  print_settings_id: "0.20mm @Q1 Pro 0.4mm - PETG",
  inherits: "0.20mm Standard @Qidi Q1 Pro",
  compatible_printers: [printers.printer_pointfour_mm.printer_settings_id],

  gap_infill_speed: "50",
  initial_layer_infill_speed: "50",
  internal_solid_infill_speed: "60",
  sparse_infill_speed: "60",

  initial_layer_speed: "40",

  inner_wall_speed: "60",
  outer_wall_speed: "50",

  small_perimeter_speed: "50",
  top_surface_speed: "50",

  support_speed: "60",

  bridge_speed: "60",
  internal_bridge_speed: "60",
};
