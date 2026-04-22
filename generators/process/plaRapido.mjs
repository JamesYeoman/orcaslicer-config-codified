import { numHalf } from "../utils.mjs";
import * as regular from "./pla.mjs";

export const pointFour = {
  ...regular.pointFour,

  name: "0.20mm @Q1 Pro 0.4mm - PLA Rapido",
  print_settings_id: "0.20mm @Q1 Pro 0.4mm - PLA Rapido",

  bridge_flow: "1.5",

  gap_infill_speed: "175",
  initial_layer_infill_speed: "150",
  internal_solid_infill_speed: "200",
  sparse_infill_speed: "200",

  initial_layer_speed: "100",

  inner_wall_speed: "175",
  outer_wall_speed: "125",

  small_perimeter_speed: "125",
  top_surface_speed: "150",
};

export const pointEight = {
  ...regular.pointEight,

  name: "0.40mm @Q1 Pro 0.8mm - PLA Rapido",
  print_settings_id: "0.40mm @Q1 Pro 0.8mm - PLA Rapido",

  bridge_flow: "1.5",

  gap_infill_speed: numHalf(pointFour.gap_infill_speed),
  initial_layer_infill_speed: numHalf(pointFour.initial_layer_infill_speed),
  internal_solid_infill_speed: numHalf(pointFour.internal_solid_infill_speed),
  sparse_infill_speed: numHalf(pointFour.sparse_infill_speed),

  initial_layer_speed: numHalf(pointFour.initial_layer_speed),

  inner_wall_speed: numHalf(pointFour.inner_wall_speed),
  outer_wall_speed: numHalf(pointFour.outer_wall_speed),

  small_perimeter_speed: numHalf(pointFour.small_perimeter_speed),
  top_surface_speed: numHalf(pointFour.top_surface_speed),
};
