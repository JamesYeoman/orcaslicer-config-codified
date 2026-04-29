# OrcaSlicer Config - Codified

> Me: I want inheritance for my user config
>
> OrcaSlicer: No. Only inheritance for system configs
>
> Me: Fine, I'll do it myself

## Why JS?

There are 2 reasons. Inheritance, and avoiding hardcoding IDs.

There are 2 forms of inheritance. The first is OrcaSlicer's config inheritance. That's not messed with. You can continue to use that for inheriting system and vendor configs. The second is JS object splatting. This lets you share common values between configs (e.g. accelerations for process configs).

As for the avoiding of hardcoded IDs, the `compatible_printers` property needs a list of `printer_settings_id` and `compatible_prints` needs a list of `print_settings_id`. You _could_ fill these in manually, but you could make a typo, or if you wanted to change it, you'd have to make sure you change it everywhere. Thanks to JS, you just need to import the machine/process configs you need, and pluck the settings id from there.

## How to use

These JS files should become your source-of-truth for your config. Make sure to keep them in sync with any changes you make in the OrcaSlicer UI. `generators/{filament|machine|process}/*.mjs` will be converted to JSON

All top-level MJS files in `generators/{filament|machine|process}` will be auto-detected and turned into JSON files in the output location specified in `generator.mjs`.

Make sure the path in `generator.mjs` points to your OrcaSlicer config directory

Run `npm run generate`.
