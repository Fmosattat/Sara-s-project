# 02 — User Flow (Prototype)

## Primary flow (Happy path)
1) **Sector Selection**
   - User selects one of four sector cards
2) **Job Level Selection**
   - User selects a level (Executive / Supervisory / Managerial / Leadership)
3) **Smart Assessment Form**
   - System shows 4 elements for that level
   - Each element includes 3 short questions
   - User rates each question 1–5
4) **Gap Analysis / Results**
   - System calculates per-element % + overall %
   - Shows classification labels
   - Highlights any element below threshold as a “gap”
5) **Recommendation Dashboard**
   - For each gap element, show tailored development recommendations
6) **Approval Workflow**
   - Manager reviews summary and recommendations
   - Approves or requests changes
7) **Report Generation**
   - Report generated with results, gaps, recommendations
   - Status transitions:
     - Draft → Sent → Approved

## Alternate paths
- If user changes sector/level mid-way, show confirmation modal:
  - “Changing sector/level will reset the assessment. Continue?”
- If incomplete form:
  - Prevent submit and scroll to first unanswered question
- If approval requests changes:
  - Report returns to Draft with reviewer notes
