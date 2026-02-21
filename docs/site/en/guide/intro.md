---
outline: deep
---

# Preface

This guide targets research users who need clear, reproducible workflows for atomic
structure visualization and lightweight analysis with LDR Atoms Viewer.
The content is aligned with version v1.0.0. UI labels or layout may differ slightly
between versions, so follow the intent of each step when you notice differences.

## Positioning and scope

LDR Atoms Viewer is a browser-based tool for interactive viewing, comparison,
and measurement of atomic models and trajectories. It is designed for
materials simulations, surface/interface structures, defect evolution,
nanostructures, and general 3D atomic visualization. Typical outputs include
publication PNGs and short videos for presentations.

## Usage and data safety

The app runs entirely in the browser. Parsing and rendering happen locally,
and model files are not uploaded. For sharing, export images or videos rather
than distributing raw data files.

## Recommended environment

- Modern browser with WebGL support (Firefox/Chrome/Edge recommended).
- Multi-core CPU and sufficient RAM for large trajectories.
- Discrete GPU is preferred for large atom counts.

Suggested baseline:

- Browser: latest Firefox/Chrome/Edge for stable WebGL and video encoding.
- CPU: 4 cores or more for parsing and rebuild tasks.
- Memory: 16 GB or more when loading multiple layers or long trajectories.
- GPU: discrete GPU recommended for smooth rendering of large point clouds.

## Guide structure

- Overview: what the viewer can do and the recommended workflow.
- File & data management: formats, loading, layers, and LAMMPS mapping.
- Appearance: colors, sizes, bonds, and per-layer styling.
- View & interaction: camera control, split view, and reproducible angles.
- Analysis: picking atoms and basic geometry.
- Playback & recording: trajectories, frame control, and video capture.
- Export: PNG settings and multi-view export tips.
- Settings: language, theme, and local preferences.
- Performance: large data strategies.
- FAQ: common issues and checks.

## Tips before you start

- Large files may take tens of seconds to parse; wait for status prompts to finish.
- When visual results look wrong, verify LAMMPS `typeid` mapping and click “Refresh Display”.
- For clean exports, hide irrelevant layers and lock camera angles first.
