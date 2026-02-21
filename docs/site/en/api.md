---
outline: deep
---

# Runtime URL Guide

This page documents the runtime URL parameters supported by the viewer.
All parameters can be combined in a single URL. When values include special
characters (`#`, `{`, `}`, `"`), they must be URL-encoded.

Base URL:

```text
https://ldrfy.github.io/atoms_viewer/
```

---

## 1) Load models

Load one model:

```text
?url=https://raw.githubusercontent.com/ldrfy/atoms_viewer_docs/refs/tags/v1.0.0/data/samples/cnt.xyz
```

Load multiple models (each URL becomes a layer, order preserved):

```text
?url=https://raw.githubusercontent.com/ldrfy/atoms_viewer_docs/refs/tags/v1.0.0/data/samples/cnt.xyz,https://raw.githubusercontent.com/ldrfy/atoms_viewer_docs/refs/tags/v1.0.0/data/samples/graphene.xyz
```

Multiple `url` params are also supported:

```text
?url=https://raw.githubusercontent.com/ldrfy/atoms_viewer_docs/refs/tags/v1.0.0/data/samples/cnt.xyz&url=https://raw.githubusercontent.com/ldrfy/atoms_viewer_docs/refs/tags/v1.0.0/data/samples/graphene.xyz
```

---

## 2) Override sample list (Empty Page menu)

The `samples` param overrides the `data.json` location that powers the sample
dropdown in the empty page.

```text
?samples=https://raw.githubusercontent.com/ldrfy/atoms_viewer_docs/refs/tags/v1.0.0/data/data.json
```

Expected JSON shape (array of items):

```json
[
  {
    "fileName": "cnt.xyz",
    "label": "cnt.xyz",
    "url": "https://example.com/cnt.xyz",
    "size": 0.009
  }
]
```

---

## 3) Settings overrides

You can pass any ViewerSettings field name as a query parameter. Types are
parsed by the current default value: numbers, booleans, strings, arrays.

### 3.1 Basic settings (flat keys)

```text
?atomScale=1.2&showBonds=false
```

Background color:

```text
?backgroundColor=ffffff&backgroundTransparent=false
```

Notes:
- `backgroundColor` accepts `ffffff`, `#ffffff` (encode as `%23ffffff`), or `0xffffff`.
- Set `backgroundTransparent=false` to make the color visible.

### 3.2 Grouped keys (export-style prefixes)

The exported settings structure uses group names. These are supported:

`display.*`, `layerDisplay.*`, `background.*`, `colors.*`, `lammps.*`, `other.*`, `files.*`

Example:

```text
?display.rotationDeg.x=10&display.rotationDeg.y=20
```

### 3.3 JSON object values

Some settings are objects or arrays (e.g. `autoRotate`, `rotationDeg`).
Provide them as JSON:

```text
?autoRotate={"enabled":true,"presetId":"diag","speedDegPerSec":12,"pauseOnInteract":true,"resumeDelayMs":600}
```

```text
?display.rotationDeg={"x":10,"y":20,"z":0}
```

---

## 4) Combined examples

Load a model, enable auto-rotation, set background and rotation:

```text
?url=https://raw.githubusercontent.com/ldrfy/atoms_viewer_docs/refs/tags/v1.0.0/data/samples/cnt.xyz&autoRotate.enabled=true&backgroundColor=ffffff&backgroundTransparent=false&display.rotationDeg.x=10&display.rotationDeg.y=20
```

Load two models and apply a basic setting:

```text
?url=https://raw.githubusercontent.com/ldrfy/atoms_viewer_docs/refs/tags/v1.0.0/data/samples/cnt.xyz,https://raw.githubusercontent.com/ldrfy/atoms_viewer_docs/refs/tags/v1.0.0/data/samples/graphene.xyz&atomScale=1.2
```

```bash
https://ldrfy.github.io/atoms_viewer/

?atomScale=1.2&showBonds=false&backgroundColor=ffffff&backgroundTransparent=false&display.rotationDeg.x=10&display.rotationDeg.y=20

?autoRotate={"enabled":true,"presetId":"diag","speedDegPerSec":12,"pauseOnInteract":true,"resumeDelayMs":600}

?samples=https://raw.githubusercontent.com/ldrfy/atoms_viewer_docs/refs/tags/v1.0.0/data/data.json

?url=https://raw.githubusercontent.com/ldrfy/atoms_viewer_docs/refs/tags/v1.0.0/data/samples/cnt.xyz

?url=https://raw.githubusercontent.com/ldrfy/atoms_viewer_docs/refs/tags/v1.0.0/data/samples/cnt.xyz,https://raw.githubusercontent.com/ldrfy/atoms_viewer_docs/refs/tags/v1.0.0/data/samples/graphene.xyz
?url=https://raw.githubusercontent.com/ldrfy/atoms_viewer_docs/refs/tags/v1.0.0/data/samples/cnt.xyz&url=https://raw.githubusercontent.com/ldrfy/atoms_viewer_docs/refs/tags/v1.0.0/data/samples/graphene.xyz
```
