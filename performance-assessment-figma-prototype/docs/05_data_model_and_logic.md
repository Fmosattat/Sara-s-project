# 05 — Data Model & Scoring Logic

## Entities

### Assessment
- id
- sector (Education / Healthcare / Projects & Construction / Administrative Services)
- jobLevel (Executive / Supervisory / Managerial / Leadership)
- employee (name/id/department)
- responses[] (12 answers total: 4 elements × 3 questions)
- computed:
  - elementScores[] (per element: average 1–5 → percentage)
  - overallScore (average of all questions or average of element averages → percentage)
  - classification (Good / Needs Improvement / Clear Gap)
  - gaps[] (elements marked as gaps)
- status (Draft / Sent / Approved)

### Recommendation
- element
- title
- rationale
- action
- timeframe

## Calculations

### Step 1: Element score
For each element:
- elementAverage = mean(question1..question3)  // each 1–5
- elementPercentage = (elementAverage / 5) * 100

### Step 2: Overall score
- overallAverage = mean(all 12 questions) OR mean(elementAverages)
- overallPercentage = (overallAverage / 5) * 100

### Step 3: Classification thresholds (configurable)
The original text requires 3 categories but did not specify numeric cutoffs.
Use the following **PoC defaults** (easy to adjust later):
- Good: >= 80%
- Needs Improvement: 60% – 79%
- Clear Gap: < 60%

### Step 4: Gap detection
- Mark an element as “Gap” if elementPercentage < 60% (PoC default)
- Surface gap count and list

## Prototype data
Use `figma/sample_data.json` to populate:
- Employee profile
- One example per job level (optional)
- At least one example with 1–2 gaps to show recommendations
