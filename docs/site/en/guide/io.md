---
outline: deep
---

# File & Data Management

## Open files and drag-and-drop

You can open one or more files via the file dialog or by dragging files into the page.
Multiple files load as separate layers without overwriting existing data. If you want a
clean workspace, hide or delete old layers before loading new files.

## Supported formats and auto-detection

The viewer auto-detects formats using filename extensions and file headers. If detection
fails, you can manually select a format and re-parse in the “Import/Parse” panel.
The parser panel reports file name, format, atom count, and frame count for verification.

Supported formats:

- XYZ (`.xyz`): lightweight snapshots, also supports multi-frame.
- LAMMPS data (`.data`, `.lmp`): `read_data` / `write_data` outputs.
- LAMMPS dump (`.dump`, `.lammpstrj`): trajectory output with `id` and `type`.
- PDB (`.pdb`): biomolecular structures with residue/chain metadata.

Format notes:

- XYZ multi-frame data repeats the same block layout per frame.
- LAMMPS dump files should include `id` and `type` columns for stable ordering.
- LAMMPS data may include Atom Type Labels for element mapping.

## Pre-import checklist

- Ensure extension matches actual content.
- Verify atom counts and frame completeness for multi-frame XYZ.
- LAMMPS dump should include `id` and `type` fields.
- Avoid overly long or non-ASCII filenames if parsing errors occur.
- Align coordinate systems in advance when comparing multiple files.

## Layer management

Each loaded file becomes a layer. You can toggle visibility, delete layers to save memory,
and choose the active layer for picking and measurement. Export output respects the
currently visible layers only.

Layer visibility rules:

- Newly loaded files may temporarily hide older layers to reduce clutter.
- The active layer can differ from the current editable layer; the UI indicates both.
- Export uses visible layers, not the active layer alone.

## LAMMPS type mapping

LAMMPS files often store numeric `typeid` values. Map them to element symbols so the
viewer can apply correct colors, radii, and readable labels. Mapping is stored per layer
so different files can interpret the same `typeid` differently.

Mapping checklist:

- Confirm `typeid` values match your simulation setup.
- Assign elements for each `typeid`, then click “Refresh Display”.
- Rebuild applies only to the current layer.

## Refresh and rebuild

After editing a mapping table, click “Refresh Display” to rebuild the current layer.
Rebuild applies only to the selected layer and does not affect others.

## Large files and multi-frame data

For very large files, parsing and rebuilding can take time. Reduce visible layers,
lower playback FPS, and avoid heavy bond rendering when working with large trajectories.
