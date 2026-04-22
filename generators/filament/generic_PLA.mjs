import * as printers from "../machine/qOnePro.mjs";

import * as regular from "../process/pla.mjs";
import * as rapido from "../process/plaRapido.mjs";

export const pointFour = {
  name: "PLA @ Q1 Pro 0.4mm",
  inherits: "Generic PLA @System",
  filament_settings_id: ["PLA @ Q1 Pro 0.4mm"],
  compatible_printers: [printers.printer_pointfour_mm.printer_settings_id],
  compatible_prints: [regular.pointFour.print_settings_id],

  activate_air_filtration: ["1"],

  additional_cooling_fan_speed: ["100"],

  complete_print_exhaust_fan_speed: ["0"],

  during_print_exhaust_fan_speed: ["100"],
  enable_pressure_advance: ["1"],

  fan_cooling_layer_time: ["0"],

  filament_cost: ["0"],
  filament_max_volumetric_speed: ["14"],
  filament_type: ["PLA"],

  full_fan_speed_layer: ["3"],

  hot_plate_temp: ["60"],
  hot_plate_temp_initial_layer: ["60"],

  nozzle_temperature: ["230"],
  nozzle_temperature_initial_layer: ["235"],
  nozzle_temperature_range_high: ["250"],
  nozzle_temperature_range_low: ["220"],

  pressure_advance: ["0.055"],

  slow_down_layer_time: ["10"],
  slow_down_min_speed: ["20"],
};

export const pointEight = {
  ...pointFour,

  name: "PLA @ Q1 Pro 0.8mm",
  filament_settings_id: ["PLA @ Q1 Pro 0.8mm"],
  compatible_printers: [printers.printer_pointeight_mm.printer_settings_id],
  compatible_prints: [regular.pointEight.print_settings_id],
};

export const rapidPointFour = {
  ...pointFour,

  name: "Rapid PLA @ Q1 Pro 0.4mm",
  inherits: "Generic PLA High Speed @System",
  filament_settings_id: ["Rapid PLA @ Q1 Pro 0.4mm"],
  compatible_prints: [rapido.pointFour.print_settings_id],

  filament_max_volumetric_speed: ["18"],
  filament_retract_when_changing_layer: ["0"],
  filament_wipe: ["0"],
};

export const rapidPointEight = {
  ...pointEight,

  name: "Rapid PLA @ Q1 Pro 0.8mm",
  inherits: "Generic PLA High Speed @System",
  filament_settings_id: ["Rapid PLA @ Q1 Pro 0.8mm"],
  compatible_prints: [rapido.pointEight.print_settings_id],

  filament_max_volumetric_speed: ["18"],
  filament_retract_when_changing_layer: ["0"],
  filament_wipe: ["0"],
};
