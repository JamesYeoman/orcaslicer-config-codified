const toStr = (parts) => parts.join("\n") + "\n";

export const change_filament_gcode = toStr(["PAUSE"]);

export const layer_change_gcode = toStr([
  "G92 E0",
  "",
  "SET_PRINT_STATS_INFO CURRENT_LAYER={layer_num + 1}",
]);

export const machine_end_gcode = toStr([
  "PRINT_END",
  "",
  "; total layers count = [total_layer_count]",
]);

export const machine_start_gcode = toStr([
  "PRINT_START BED=[first_layer_bed_temperature] HOTEND=[first_layer_temperature] CHAMBER=[chamber_temperature]",
  "LINE_PURGE",
  "",
  "SET_PRINT_STATS_INFO TOTAL_LAYER=[total_layer_count]",
]);
