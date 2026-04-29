import * as printers from "../machine/qOnePro.mjs";
import * as processes from "../process/tpu.mjs";

export const pointFour = {
  name: "TPU @ Q1 Pro 0.4mm",
  inherits: "Generic TPU @System",
  compatible_printers: [printers.printer_pointfour_mm.printer_settings_id],
  compatible_prints: [processes.pointFour.print_settings_id],
  filament_settings_id: ["TPU @ Q1 Pro 0.4mm"],

  activate_air_filtration: ["1"],

  additional_cooling_fan_speed: ["30"],

  complete_print_exhaust_fan_speed: ["0"],

  during_print_exhaust_fan_speed: ["100"],

  enable_overhang_bridge_fan: ["0"],
  enable_pressure_advance: ["1"],

  fan_cooling_layer_time: ["60"],
  fan_max_speed: ["30"],
  fan_min_speed: ["30"],

  filament_cost: ["0"],
  filament_density: ["1.21"],
  filament_flow_ratio: ["0.98"],
  filament_max_volumetric_speed: ["8"],
  filament_retraction_length: ["2"],
  filament_retraction_minimum_travel: ["1.5"],
  filament_retraction_speed: ["20"],
  filament_type: ["TPU"],

  full_fan_speed_layer: ["3"],

  hot_plate_temp: ["60"],
  hot_plate_temp_initial_layer: ["60"],

  nozzle_temperature: ["230"],
  nozzle_temperature_initial_layer: ["230"],

  pressure_advance: ["0.075"],

  slow_down_min_speed: ["20"],
};
