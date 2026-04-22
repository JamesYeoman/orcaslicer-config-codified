import * as printers from "../machine/qOnePro.mjs";
import * as processes from "../process/petg.mjs";

export const pointFour = {
  name: "PETG @ Q1 Pro 0.4mm",
  inherits: "Generic PETG @System",
  compatible_printers: [printers.printer_pointfour_mm.printer_settings_id],
  compatible_prints: [processes.pointFour.print_settings_id],
  filament_settings_id: ["PETG @ Q1 Pro 0.4mm"],

  activate_air_filtration: ["1"],

  chamber_temperature: ["30"],

  close_fan_the_first_x_layers: ["1"],

  complete_print_exhaust_fan_speed: ["0"],

  during_print_exhaust_fan_speed: ["100"],

  enable_pressure_advance: ["1"],

  fan_max_speed: ["50"],

  filament_cost: ["0"],
  filament_flow_ratio: ["0.95"],
  filament_max_volumetric_speed: ["10"],
  filament_retract_when_changing_layer: ["1"],
  filament_retraction_length: ["1"],
  filament_retraction_minimum_travel: ["2"],
  filament_retraction_speed: ["25"],
  filament_type: ["PETG"],
  filament_wipe: ["1"],
  filament_wipe_distance: ["2"],
  filament_z_hop: ["0"],

  hot_plate_temp: ["75"],
  hot_plate_temp_initial_layer: ["75"],

  nozzle_temperature: ["230"],
  nozzle_temperature_initial_layer: ["230"],

  overhang_fan_speed: ["50"],
  overhang_fan_threshold: ["25%"],

  pressure_advance: ["0.07"],

  slow_down_for_layer_cooling: ["0"],
  slow_down_layer_time: ["6"],
  slow_down_min_speed: ["20"],
};
