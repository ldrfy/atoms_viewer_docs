---
outline: deep
---

# FAQ & Troubleshooting

## Loading gets stuck

- Large files can take time; wait for parsing and rebuild to finish.
- Check the browser console for errors.
- Load files one by one to isolate problematic data.
- Try another browser to rule out compatibility issues.

## Rotation or zoom is laggy

- Too many visible layers or high FPS playback can slow interaction.
- Hide layers or reduce visual complexity.
- Prefer single view on weaker devices.

## LAMMPS mapping looks wrong

- Confirm you are editing the correct layer’s mapping table.
- Click “Refresh Display” after changes.
- Verify `typeid` values and column fields in the data file.

## Export is slow or fails

- Lower export scale or hide unnecessary layers.
- Use transparent background only when needed.
- Try exporting in single view instead of split view.
## Transparent PNG has large blank margins

- Ensure transparent background is enabled.
- Hidden distant atoms can expand the crop bounds.
- Hide unrelated layers and export again.

## Video download fails or won’t play

- Make sure the browser allows downloads.
- WebM may require a compatible player; convert to MP4 if needed.
- Reduce FPS or capture size for large recordings.
