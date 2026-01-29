---
outline: deep
---

# Performance & Large Data

## Main factors

Performance is dominated by atom count, frame count, and number of visible layers.
Export scale, anti-aliasing, and extra helpers also add load. GPU drivers and
browser differences can change behavior across machines.

## Memory guidance

Multi-frame trajectories consume RAM for cached coordinates. Large exports require
more GPU memory. Hide or delete unused layers to reduce peak usage. If the browser
crashes, memory limits may have been reached.

## Practical tips for million-atom datasets

- Use single view and minimize overlays.
- Reduce atom size or disable bonds during exploration.
- Record or export only at key frames.
- Raise export scale only for final figures.

## If the page becomes unresponsive

- Wait for parsing or rebuild to complete; large files can take time.
- Reload the page and re-import fewer layers.
- Use a stronger GPU or split data into smaller files.
