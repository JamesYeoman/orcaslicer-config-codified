import * as generic from "./generic_TPU.mjs";

export const pointFour = {
  ...generic.pointFour,
  name: "FormFutura TPU @ Q1 Pro 0.4mm",
  filament_settings_id: ["FormFutura TPU @ Q1 Pro 0.4mm"],

  default_filament_colour: ["#804a2a"], // Skin tone ID8

  additional_cooling_fan_speed: ["0"],
  during_print_exhaust_fan_speed: ["50"],

  enable_pressure_advance: ["0"],

  filament_cost: [(61.4 * 2).toFixed(2)], // 500g spool
  filament_density: ["1.22"],
  filament_retraction_length: ["1"],

  nozzle_temperature: ["240"],
  nozzle_temperature_initial_layer: ["240"],
};
