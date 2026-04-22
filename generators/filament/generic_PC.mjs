import * as printers from "../machine/qOnePro.mjs";
import * as processes from "../process/pc.mjs";

export const pointFour = {
  name: "PC @ Q1 Pro 0.4mm",
  inherits: "Generic PC @System",
  compatible_printers: [printers.printer_pointfour_mm.printer_settings_id],
  compatible_prints: [processes.pointFour.print_settings_id],
  filament_settings_id: ["PC @ Q1 Pro 0.4mm"],

  activate_chamber_temp_control: ["1"],

  chamber_temperature: ["60"],

  complete_print_exhaust_fan_speed: ["0"],

  enable_pressure_advance: ["1"],

  fan_cooling_layer_time: ["30"],
  fan_max_speed: ["20"],
  fan_min_speed: ["0"],

  filament_cost: ["0"],
  filament_density: ["1.23"],
  filament_flow_ratio: ["0.99"],
  filament_max_volumetric_speed: ["12"],
  filament_type: ["PC"],
  filament_wipe: ["0"],

  hot_plate_temp: ["105"],
  hot_plate_temp_initial_layer: ["105"],

  nozzle_temperature: ["300"],
  nozzle_temperature_initial_layer: ["300"],
  nozzle_temperature_range_high: ["300"],
  nozzle_temperature_range_low: ["290"],

  overhang_fan_speed: ["20"],

  pressure_advance: ["0.06"],

  reduce_fan_stop_start_freq: ["0"],

  slow_down_layer_time: ["10"],
  slow_down_min_speed: ["10"],

  temperature_vitrification: ["113"],
};
