---
outline: deep
---

# Layer Appearance & Colors

## Per-layer settings

Colors, bonds, and sizes are stored per layer. The “Atom Colors” and “Layer Appearance”
sections always show the current layer name so you know which layer you are editing.
Use “Edit all layers” to broadcast changes across layers when needed.

## Atom color mapping

Each layer has its own color table. You can map by element or by combined keys such as
`C1`, `O2` for different type groups. Changes apply instantly after a brief refresh,
and can be restored to default at any time.

## Layer appearance controls

- Atom size: scales sphere radius to emphasize or de-emphasize density.
- Bond visibility: toggle bonds for performance or clarity.
- Bond factor: controls bond detection cutoff.
- Sphere segments: controls smoothness vs. performance.
- Bond radius: sets bond thickness for presentation.

Tip: reduce atom size and increase bond radius for a stick-like style.

## Consistency across layers

Mapping, colors, and appearance remain isolated per layer. When comparing files,
verify mapping first, then use the “Edit all layers” switch to unify style.

## Performance tuning via appearance

- Disable bonds to speed up rendering of large datasets.
- Lower sphere segments during exploration and raise it only for final export.
- Keep bond factor moderate to avoid excessive bond generation.
