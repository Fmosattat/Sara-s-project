# Figma Plugin Import Instructions

## Files
- `manifest.json`
- `code.js`

## Import into Figma (Desktop)
1. Open **Figma Desktop**.
2. Go to **Plugins → Development → Import plugin from manifest...**
3. Select `performance-assessment-figma-prototype/figma/plugin/manifest.json`.
4. Open or create a Figma file.
5. Run **Plugins → Development → Assessment Prototype Builder**.

## What the plugin does
- Reads the embedded JSON sourced from `figma/prototype_ui_structure.json`.
- Creates pages:
  - `Design System`
  - `Prototype`
- Creates design-system components and variants.
- Creates prototype frames in order `01` through `07`.
- Creates clickable action nodes and wires prototype links from `prototypeConnections`.
