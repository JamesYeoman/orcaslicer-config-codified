import * as printers from "../machine/qOnePro.mjs";
import processBase from "./base.json" with { type: "json" };
import pointFourBase from "./base_pointfour.json" with { type: "json" };

export const pointFour = {
  ...processBase,
  ...pointFourBase,

  name: "0.20mm @Q1 Pro 0.4mm - TPU",
  print_settings_id: "0.20mm @Q1 Pro 0.4mm - TPU",
  inherits: "0.20mm Standard @Qidi Q1 Pro",
  compatible_printers: [printers.printer_pointfour_mm.printer_settings_id],

  enable_support: "0",

  gap_infill_speed: "80",
  initial_layer_infill_speed: "100",
  internal_solid_infill_speed: "80",
  sparse_infill_speed: "80",

  initial_layer_speed: "80",

  inner_wall_speed: "80",
  outer_wall_speed: "60",

  small_perimeter_speed: "40",
  top_surface_speed: "60",

  bridge_speed: "40",
  internal_bridge_speed: "40",
};
