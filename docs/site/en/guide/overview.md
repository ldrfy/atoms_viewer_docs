---
outline: deep
---

# Overview

## What you can do

- Load XYZ, PDB, and LAMMPS data and view structures interactively.
- Open multiple files as layers for comparison and overlay.
- Use split view to compare two orthogonal projections.
- Pick atoms to inspect element/type and coordinates.
- Measure distances and angles between selected atoms.
- Play multi-frame trajectories and record videos.
- Export PNG images with transparent or solid backgrounds.
- Switch themes and languages for comfortable viewing.

## 10-minute quick start

1. Open the web app or a local build, then click “Open File” or drag files into the page.
2. In the Layer panel, confirm loaded files and pick the current layer to edit.
3. For LAMMPS data, map `typeid` to elements in the LAMMPS panel and click “Refresh Display”.
4. Adjust colors and appearance in “Atom Colors” and “Layer Appearance”.
5. Rotate/zoom/pan with the mouse, or type exact rotation angles and distance.
6. Use the playback bar for trajectories, then export PNG or record a video.

## Interface map and terminology

- Main canvas: model rendering and interaction.
- Right panel: files/layers, view, display, playback, and export settings.
- Status hints: loading, rebuild, and export progress.
- Playback bar: frame control and recording.

Terminology:

- Current layer: the layer being edited in panels.
- Active layer: the layer used for picking and measurement.
- Visible layers: layers currently rendered.

## Recommended workflow

1. Load files and verify parsing results (format, atom count, frame count).
2. For LAMMPS data, map `typeid` to elements and rebuild the layer.
3. Align the camera and projection (orthographic or perspective).
4. Adjust colors and appearance, then lock the style if needed.
5. Perform picking and measurements on the active layer.
6. Play trajectories to locate key frames, then export PNG or video.

## Output use cases

- Paper figures: transparent PNG with auto-crop and consistent camera angles.
- Slides: solid background color with higher export scale.
- Short demos: record rotation or trajectory playback as WebM.

## Image placeholders

Place English images under `docs/site/public/img/en/` and reference them as `/img/en/...`:

<!-- ![UI overview](/img/en/ui-overview.jpg)
![Layers panel](/img/en/layers-panel.jpg) -->
