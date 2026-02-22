# Functional Performance Analysis Platform — Figma Prototype Spec (PoC)

This repository is a **build-ready specification pack** for creating a complete **Figma prototype** of a functional
performance analysis platform.

It is designed so a coding agent (e.g., Codex) can:
1) Create the **Figma prototype** (frames, components, interactions) from the specs, and/or
2) Build a matching **web UI** later if needed.

---

## What you will prototype in Figma (Modules / Screens)

From the provided requirements:
- Sector selection
- Job level selection
- Smart assessment form
- Results + skill gap analysis
- Recommendation dashboard
- Approval workflow
- Report generation + statuses (Draft / Sent / Approved)

---

## Quick start (for Codex / implementer)

1. Open `docs/03_screens.md` and create frames in Figma with the same names.
2. Build components described in `docs/04_components_design_system.md`.
3. Use copy from `docs/06_copywriting_en.md` (and Arabic from `docs/07_copywriting_ar.md` if bilingual UI is desired).
4. Implement scoring + classifications using rules in `docs/05_data_model_and_logic.md`.
5. Implement the PoC narrative required by “Section 4.7” using `docs/4.7_poc_innovation.md`.
6. Use `figma/sample_data.json` to create realistic prototype examples (employee, scores, gaps, recommendations).
7. Link interactions according to `docs/02_user_flow.md`.

---

## Figma conventions

- Use **Auto Layout** for all cards, forms, tables.
- Use 8px spacing grid.
- Create components with variants where applicable (buttons, badges, status chips).
- Name frames and components exactly as written (helps automation).

See `figma/frames_map.md` for naming + structure.

---

## License
MIT — see `LICENSE`.
