---
outline: deep
---

# Playback & Recording

## Multi-frame data

XYZ and LAMMPS dumps can contain multiple frames for trajectory playback. For long
trajectories, consider loading in segments or reducing FPS.

## Playback control

Use the playback bar to play/pause, scrub the timeline, and jump to specific frames.
Adjust FPS to balance smoothness and responsiveness.

## Per-frame rebuild

If needed, enable “Rebuild bonds per frame” for evolving bond networks. Disable it for
better performance on large trajectories.

## Video recording

Start recording to draw a capture region, then move or resize it before confirming.
Recording FPS is controlled in “Other Settings”. The output is a WebM video.
For smaller files, reduce FPS, capture size, or recording length.

## Playback tips

- Pause on key frames before measurements or exports.
- Hide non-target layers to keep playback responsive.
