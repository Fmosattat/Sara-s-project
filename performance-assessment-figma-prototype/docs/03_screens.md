# 03 — Screen-by-Screen Specifications (Figma)

> Create one Figma page named **Prototype** and build these frames in order.

---

## Frame 01 — Sector Selection
**Name:** `01 Sector Selection`

**Layout:**
- Header: “Select Sector”
- 4 cards (grid 2x2):
  - Education
  - Healthcare
  - Projects & Construction
  - Administrative Services
- Primary button: “Continue” (disabled until a card is selected)

**Interactions:**
- Selecting a card highlights it (selected state)
- Continue → Frame 02

---

## Frame 02 — Job Level Selection
**Name:** `02 Job Level Selection`

**Layout:**
- Header: “Select Job Level”
- 4 level cards/rows:
  - Executive
  - Supervisory
  - Managerial
  - Leadership
- Each card shows a preview list of 4 elements (see docs/01)

**Interactions:**
- Select a level → enable Continue
- Continue → Frame 03

---

## Frame 03 — Smart Assessment Form
**Name:** `03 Smart Assessment Form`

**Layout:**
- Breadcrumb / stepper: Sector → Level → Assessment
- Summary bar:
  - Sector (selected)
  - Job level (selected)
  - Employee (sample: from `figma/sample_data.json`)
- Form sections (4) — based on selected level:
  - Each section includes:
    - Element title
    - Helper text: “Rate each statement from 1 (Very Low) to 5 (Excellent).”
    - 3 short questions (radio 1–5)
- Bottom actions:
  - Secondary: “Save as Draft”
  - Primary: “Submit Assessment”

**Smart behavior (prototype-level):**
- If any question unanswered, show inline error: “Required”
- Show progress indicator: “X/12 answered”

**Interactions:**
- Submit → Frame 04

---

## Frame 04 — Skill Gap Analysis (Results)
**Name:** `04 Results & Gap Analysis`

**Layout:**
- Header: “Results”
- KPI row:
  - Overall score % + classification badge
- Element cards (4):
  - Element name
  - % score
  - classification
  - visual meter/progress bar
  - Gap chip if below threshold: “Gap”
- CTA:
  - “View Recommendations” → Frame 05
  - “Generate Report” → Frame 07 (allowed even before approval, but status Draft)

**Interactions:**
- View Recommendations → Frame 05
- Back → Frame 03

---

## Frame 05 — Recommendation Dashboard
**Name:** `05 Recommendation Dashboard`

**Layout:**
- Header: “Recommendations”
- For each gap element:
  - Element title + “Gap detected”
  - Recommendation cards (2–4 each):
    - Title
    - Why it helps (1–2 lines)
    - Suggested activity (training/coaching/process change)
    - Target timeframe (e.g., 2–4 weeks)
- Non-gap elements show collapsed section: “No recommendation needed”

**CTA:**
- “Send for Approval” → Frame 06

---

## Frame 06 — Approval Workflow
**Name:** `06 Approval Workflow`

**Layout:**
- Header: “Approval”
- Summary panel:
  - Sector, Level, Employee
  - Overall score, gap count
- Recommendations preview
- Approver actions:
  - Primary: “Approve”
  - Secondary: “Request Changes”
  - Text area: “Approval Notes”
- Status timeline component:
  - Draft → Sent → Approved

**Interactions:**
- Approve → Frame 07 with status “Approved”
- Request Changes → Frame 05 with banner “Changes requested” + notes visible

---

## Frame 07 — Report Generation / Final Report
**Name:** `07 Report`

**Layout:**
- Report header:
  - Report ID (mock)
  - Status chip (Draft / Sent / Approved)
  - Date
- Sections:
  1) Sector
  2) Job level
  3) Evaluation results (overall + element table)
  4) Identified gaps
  5) Proposed recommendations
- Actions:
  - “Export PDF” (prototype button)
  - “Save” (Draft)
  - “Mark as Sent”
  - “Back to Dashboard”

**Interactions:**
- Mark as Sent → status chip becomes “Sent”
- If coming from approval “Approve” → status chip “Approved”
