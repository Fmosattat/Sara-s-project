const DEFAULT_STRUCTURE_JSON = `{
  "meta": {
    "project": "Performance Assessment Prototype",
    "style": "Enterprise HR SaaS",
    "grid": "8px",
    "fontFamily": "Inter",
    "tokenSource": "figma/tokens.json",
    "contentSource": [
      "docs/01_problem_and_scope.md",
      "docs/02_user_flow.md",
      "docs/03_screens.md",
      "docs/05_data_model_and_logic.md",
      "docs/06_copywriting_en.md",
      "figma/sample_data.json"
    ]
  },
  "tokensApplied": {
    "colors": {
      "bg.default": "#FFFFFF",
      "bg.subtle": "#F7F8FA",
      "text.primary": "#111827",
      "text.secondary": "#6B7280",
      "border.default": "#E5E7EB",
      "semantic.good": "#16A34A",
      "semantic.needsImprovement": "#F59E0B",
      "semantic.clearGap": "#DC2626",
      "semantic.info": "#2563EB"
    },
    "spacing": {
      "xs": 4,
      "sm": 8,
      "md": 16,
      "lg": 24,
      "xl": 32
    },
    "radius": {
      "sm": 8,
      "md": 12,
      "lg": 16
    },
    "typography": {
      "title": 28,
      "section": 20,
      "body": 16,
      "caption": 12
    }
  },
  "pages": [
    {
      "name": "Design System",
      "layout": {
        "type": "auto-layout-vertical",
        "width": 1440,
        "padding": 32,
        "gap": 24
      },
      "sections": [
        {
          "name": "Typography",
          "styles": [
            { "name": "Title", "size": 28, "weight": 700, "lineHeight": 36 },
            { "name": "Section", "size": 20, "weight": 600, "lineHeight": 28 },
            { "name": "Body", "size": 16, "weight": 400, "lineHeight": 24 },
            { "name": "Caption", "size": 12, "weight": 500, "lineHeight": 16 }
          ]
        },
        {
          "name": "Button",
          "componentSet": "Button/State",
          "variants": [
            { "type": "Primary", "state": "Default", "label": "Continue" },
            { "type": "Primary", "state": "Loading", "label": "Submitting..." },
            { "type": "Primary", "state": "Disabled", "label": "Continue" },
            { "type": "Secondary", "state": "Default", "label": "Save as Draft" }
          ]
        },
        {
          "name": "Card",
          "componentSet": "Card/State",
          "variants": [
            { "state": "Default", "title": "Education", "subtitle": "Sector" },
            { "state": "Selectable", "title": "Executive", "subtitle": "Job Level" },
            { "state": "Selected", "title": "Supervisory", "subtitle": "Job Level" }
          ]
        },
        {
          "name": "Rating Scale",
          "component": "RatingScale/1-5",
          "labels": ["Very Low", "Low", "Medium", "Good", "Excellent"],
          "helper": "Rate each statement from 1 (Very Low) to 5 (Excellent)."
        },
        {
          "name": "Badge",
          "componentSet": "Badge/Type",
          "variants": [
            { "type": "Status", "label": "Draft" },
            { "type": "Status", "label": "Sent" },
            { "type": "Status", "label": "Approved" },
            { "type": "Classification", "label": "Good" },
            { "type": "Classification", "label": "Needs Improvement" },
            { "type": "Classification", "label": "Clear Gap" },
            { "type": "Gap", "label": "Gap" }
          ]
        },
        {
          "name": "Progress Bar",
          "component": "ProgressBar",
          "samples": [
            { "value": 40 },
            { "value": 67 },
            { "value": 80 }
          ]
        },
        {
          "name": "Table",
          "component": "ResultsTable",
          "columns": ["Element", "Score %", "Classification", "Gap?"]
        },
        {
          "name": "Modal",
          "component": "ConfirmationModal",
          "title": "Changing sector or level will reset your assessment. Continue?",
          "actions": ["Cancel", "Continue"]
        },
        {
          "name": "Stepper",
          "component": "FlowStepper",
          "steps": ["Sector", "Level", "Assessment", "Results", "Recommendations", "Approval", "Report"]
        },
        {
          "name": "Banner",
          "component": "InlineBanner",
          "states": [
            "Saved as Draft",
            "Changes requested",
            "Approved successfully"
          ]
        }
      ]
    },
    {
      "name": "Prototype",
      "layout": {
        "type": "horizontal-flow",
        "frameSize": { "width": 1440, "height": 1024 },
        "frameGap": 80
      },
      "frames": [
        {
          "name": "01 Sector Selection",
          "header": "Select Sector",
          "content": {
            "sectorCards": [
              "Education",
              "Healthcare",
              "Projects & Construction",
              "Administrative Services"
            ],
            "primaryAction": { "label": "Continue", "enabled": false }
          },
          "interactions": [
            "Select any card -> card becomes selected",
            "When selected -> Continue enabled",
            "Continue -> 02 Job Level Selection"
          ]
        },
        {
          "name": "02 Job Level Selection",
          "header": "Select Job Level",
          "content": {
            "levelCards": [
              {
                "level": "Executive",
                "elements": [
                  "Task completion",
                  "Work quality",
                  "Time commitment",
                  "Procedure compliance"
                ]
              },
              {
                "level": "Supervisory",
                "elements": [
                  "Task distribution",
                  "Execution follow-up",
                  "Solving daily problems",
                  "Compliance with standards"
                ]
              },
              {
                "level": "Managerial",
                "elements": [
                  "Work organization",
                  "Report follow-up",
                  "Coordination between departments",
                  "Compliance with policies"
                ]
              },
              {
                "level": "Leadership",
                "elements": [
                  "Setting objectives",
                  "Team guidance",
                  "Monitoring overall results",
                  "Addressing challenges"
                ]
              }
            ],
            "primaryAction": { "label": "Continue", "enabled": false }
          },
          "interactions": [
            "Select level -> Continue enabled",
            "Continue -> 03 Smart Assessment Form"
          ]
        },
        {
          "name": "03 Smart Assessment Form",
          "header": "Smart Assessment Form",
          "content": {
            "stepper": ["Sector", "Level", "Assessment"],
            "summary": {
              "sector": "Projects & Construction",
              "jobLevel": "Supervisory",
              "employee": "Sample Employee (EMP-0142)"
            },
            "helper": "Rate each statement from 1 (Very Low) to 5 (Excellent).",
            "progress": "X/12 answered",
            "elements": [
              {
                "title": "Task distribution",
                "questions": [
                  "Assigns tasks clearly with defined ownership.",
                  "Balances workload fairly across the team.",
                  "Matches tasks to team capabilities."
                ]
              },
              {
                "title": "Execution follow-up",
                "questions": [
                  "Tracks progress consistently.",
                  "Provides timely feedback during execution.",
                  "Escalates risks early."
                ]
              },
              {
                "title": "Solving daily problems",
                "questions": [
                  "Identifies root causes quickly.",
                  "Resolves blockers with minimal delay.",
                  "Maintains service continuity during issues."
                ]
              },
              {
                "title": "Compliance with standards",
                "questions": [
                  "Follows safety and quality standards.",
                  "Ensures team compliance in daily work.",
                  "Documents deviations and corrective actions."
                ]
              }
            ],
            "actions": ["Save as Draft", "Submit Assessment"],
            "validation": ["Required", "Please complete all questions before submitting."]
          },
          "interactions": [
            "Submit Assessment (all answered) -> 04 Results & Gap Analysis",
            "Submit Assessment (incomplete) -> show Required and scroll to first unanswered"
          ]
        },
        {
          "name": "04 Results & Gap Analysis",
          "header": "Results",
          "content": {
            "overall": {
              "percentage": 51.7,
              "classification": "Clear Gap"
            },
            "elementCards": [
              {
                "element": "Task distribution",
                "percentage": 53.3,
                "classification": "Clear Gap",
                "isGap": true
              },
              {
                "element": "Execution follow-up",
                "percentage": 46.7,
                "classification": "Clear Gap",
                "isGap": true
              },
              {
                "element": "Solving daily problems",
                "percentage": 66.7,
                "classification": "Needs Improvement",
                "isGap": false
              },
              {
                "element": "Compliance with standards",
                "percentage": 40,
                "classification": "Clear Gap",
                "isGap": true
              }
            ],
            "actions": ["View Recommendations", "Generate Report", "Back"]
          },
          "interactions": [
            "View Recommendations -> 05 Recommendation Dashboard",
            "Generate Report -> 07 Report (Draft)",
            "Back -> 03 Smart Assessment Form"
          ]
        },
        {
          "name": "05 Recommendation Dashboard",
          "header": "Recommendations",
          "content": {
            "sections": [
              {
                "element": "Task distribution",
                "status": "Gap detected",
                "recommendations": [
                  {
                    "title": "Task Ownership Matrix Workshop",
                    "rationale": "Improves role clarity and reduces duplicated effort.",
                    "action": "Run a 90-minute workshop to map owners per recurring task.",
                    "timeframe": "2 weeks"
                  },
                  {
                    "title": "Weekly Load-Balance Review",
                    "rationale": "Helps maintain fair distribution across team members.",
                    "action": "Review assignment board every Monday and rebalance by capacity.",
                    "timeframe": "4 weeks"
                  }
                ]
              },
              {
                "element": "Execution follow-up",
                "status": "Gap detected",
                "recommendations": [
                  {
                    "title": "Daily Progress Huddle",
                    "rationale": "Creates short feedback loops and early risk visibility.",
                    "action": "Implement a 15-minute stand-up with blockers and next steps.",
                    "timeframe": "2 weeks"
                  },
                  {
                    "title": "Escalation Playbook",
                    "rationale": "Standardizes when and how risks are escalated.",
                    "action": "Publish severity-based escalation rules for supervisors.",
                    "timeframe": "3 weeks"
                  }
                ]
              },
              {
                "element": "Compliance with standards",
                "status": "Gap detected",
                "recommendations": [
                  {
                    "title": "Compliance Checklist Rollout",
                    "rationale": "Reduces missed safety and quality controls.",
                    "action": "Introduce shift-level checklist with supervisor sign-off.",
                    "timeframe": "2 weeks"
                  },
                  {
                    "title": "Corrective Action Logging",
                    "rationale": "Improves traceability of deviations and fixes.",
                    "action": "Track deviations in a shared log and review weekly.",
                    "timeframe": "4 weeks"
                  }
                ]
              },
              {
                "element": "Solving daily problems",
                "status": "No recommendation needed",
                "collapsed": true
              }
            ],
            "actions": ["Send for Approval", "Back"]
          },
          "interactions": [
            "Send for Approval -> 06 Approval Workflow",
            "If request changes path -> show banner 'Changes requested' with notes"
          ]
        },
        {
          "name": "06 Approval Workflow",
          "header": "Approval",
          "content": {
            "summaryPanel": {
              "sector": "Projects & Construction",
              "level": "Supervisory",
              "employee": "Sample Employee",
              "overallScore": "51.7%",
              "gapCount": 3
            },
            "notesFieldLabel": "Approval Notes",
            "timeline": ["Draft", "Sent", "Approved"],
            "actions": ["Approve", "Request Changes"]
          },
          "interactions": [
            "Approve -> 07 Report (status Approved)",
            "Request Changes -> 05 Recommendation Dashboard with changes banner"
          ]
        },
        {
          "name": "07 Report",
          "header": "Report",
          "content": {
            "reportHeader": {
              "reportId": "RPT-2025-0142",
              "date": "2025-02-14",
              "status": "Approved"
            },
            "sections": [
              "Sector",
              "Job Level",
              "Evaluation Results",
              "Identified Gaps",
              "Suggested Recommendations"
            ],
            "evaluationTableRows": [
              ["Task distribution", "53.3%", "Clear Gap", "Yes"],
              ["Execution follow-up", "46.7%", "Clear Gap", "Yes"],
              ["Solving daily problems", "66.7%", "Needs Improvement", "No"],
              ["Compliance with standards", "40.0%", "Clear Gap", "Yes"]
            ],
            "actions": ["Export PDF", "Save Draft", "Mark as Sent", "Back to Dashboard"]
          },
          "interactions": [
            "Mark as Sent -> status chip Sent",
            "Arrive from Approve path -> status chip Approved"
          ]
        }
      ]
    }
  ],
  "logic": {
    "formulae": {
      "elementAverage": "mean(3 question scores)",
      "elementPercentage": "(elementAverage / 5) * 100",
      "overallAverage": "mean(all 12 answers)",
      "overallPercentage": "(overallAverage / 5) * 100"
    },
    "classificationThresholds": {
      "Good": ">=80",
      "Needs Improvement": "60-79",
      "Clear Gap": "<60"
    },
    "gapRule": "elementPercentage < 60"
  },
  "prototypeConnections": [
    { "from": "01 Sector Selection", "trigger": "Continue", "to": "02 Job Level Selection" },
    { "from": "02 Job Level Selection", "trigger": "Continue", "to": "03 Smart Assessment Form" },
    { "from": "03 Smart Assessment Form", "trigger": "Submit Assessment", "to": "04 Results & Gap Analysis" },
    { "from": "04 Results & Gap Analysis", "trigger": "View Recommendations", "to": "05 Recommendation Dashboard" },
    { "from": "05 Recommendation Dashboard", "trigger": "Send for Approval", "to": "06 Approval Workflow" },
    { "from": "06 Approval Workflow", "trigger": "Approve", "to": "07 Report" },
    { "from": "06 Approval Workflow", "trigger": "Request Changes", "to": "05 Recommendation Dashboard" },
    { "from": "04 Results & Gap Analysis", "trigger": "Generate Report", "to": "07 Report" }
  ]
}
`;

async function main() {
  try {
    await figma.loadFontAsync({ family: 'Inter', style: 'Regular' }).catch(() => figma.loadFontAsync({ family: 'Roboto', style: 'Regular' }));
    await figma.loadFontAsync({ family: 'Inter', style: 'Bold' }).catch(() => figma.loadFontAsync({ family: 'Roboto', style: 'Bold' }));

    const structure = JSON.parse(DEFAULT_STRUCTURE_JSON);
    const tokens = structure.tokensApplied || {};

    const pagesByName = new Map();
    for (const pageSpec of structure.pages || []) {
      const page = figma.createPage();
      page.name = pageSpec.name;
      pagesByName.set(pageSpec.name, page);
      if (pageSpec.name === 'Design System') buildDesignSystem(page, pageSpec, tokens);
      if (pageSpec.name === 'Prototype') buildPrototype(page, pageSpec, tokens);
    }

    wirePrototypeLinks(pagesByName.get('Prototype'), structure.prototypeConnections || []);
    figma.notify('Prototype generated successfully.');
    figma.closePlugin();
  } catch (error) {
    figma.notify('Failed to generate prototype: ' + (error && error.message ? error.message : String(error)));
    console.error(error);
    figma.closePlugin();
  }
}

function buildDesignSystem(page, pageSpec, tokens) {
  let y = 40;
  const title = createText('Design System', 36, true, tokens);
  title.x = 40;
  title.y = y;
  page.appendChild(title);
  y += 64;

  for (const section of pageSpec.sections || []) {
    const sectionFrame = figma.createFrame();
    sectionFrame.name = section.name;
    sectionFrame.layoutMode = 'VERTICAL';
    sectionFrame.counterAxisSizingMode = 'AUTO';
    sectionFrame.primaryAxisSizingMode = 'AUTO';
    sectionFrame.itemSpacing = 16;
    sectionFrame.paddingLeft = 16;
    sectionFrame.paddingRight = 16;
    sectionFrame.paddingTop = 16;
    sectionFrame.paddingBottom = 16;
    setFrameFill(sectionFrame, tokens?.colors?.['bg.subtle'] || '#F7F8FA');
    sectionFrame.strokes = [{ type: 'SOLID', color: hexToRgb(tokens?.colors?.['border.default'] || '#E5E7EB') }];
    sectionFrame.cornerRadius = 12;
    sectionFrame.x = 40;
    sectionFrame.y = y;

    sectionFrame.appendChild(createText(section.name, 20, true, tokens));

    if (section.name === 'Button') addButtonVariants(sectionFrame, section.variants || [], tokens);
    else if (section.name === 'Card') addCardVariants(sectionFrame, section.variants || [], tokens);
    else if (section.name === 'Badge') addBadgeVariants(sectionFrame, section.variants || [], tokens);
    else if (section.name === 'Rating Scale') addRatingScale(sectionFrame, section, tokens);
    else if (section.name === 'Progress Bar') addProgressSamples(sectionFrame, section.samples || [], tokens);
    else if (section.name === 'Table') addTable(sectionFrame, section.columns || [], tokens);
    else if (section.name === 'Modal') addModal(sectionFrame, section, tokens);
    else if (section.name === 'Stepper') addStepper(sectionFrame, section.steps || [], tokens);
    else if (section.name === 'Typography') addTypography(sectionFrame, section.styles || [], tokens);
    else if (section.name === 'Banner') addBanners(sectionFrame, section.states || [], tokens);

    page.appendChild(sectionFrame);
    y += sectionFrame.height + 24;
  }
}

function buildPrototype(page, pageSpec, tokens) {
  let x = 40;
  for (const frameSpec of pageSpec.frames || []) {
    const frame = figma.createFrame();
    frame.name = frameSpec.name;
    frame.resize(1440, 1024);
    frame.layoutMode = 'VERTICAL';
    frame.counterAxisSizingMode = 'FIXED';
    frame.primaryAxisSizingMode = 'AUTO';
    frame.paddingLeft = 32;
    frame.paddingRight = 32;
    frame.paddingTop = 32;
    frame.paddingBottom = 32;
    frame.itemSpacing = 20;
    setFrameFill(frame, tokens?.colors?.['bg.default'] || '#FFFFFF');
    frame.strokes = [{ type: 'SOLID', color: hexToRgb(tokens?.colors?.['border.default'] || '#E5E7EB') }];
    frame.x = x;
    frame.y = 40;

    frame.appendChild(createText(frameSpec.header || frameSpec.name, 28, true, tokens));

    const content = figma.createFrame();
    content.name = 'Content';
    content.layoutMode = 'VERTICAL';
    content.counterAxisSizingMode = 'AUTO';
    content.primaryAxisSizingMode = 'AUTO';
    content.itemSpacing = 12;
    content.fills = [];
    addContentBlocks(content, frameSpec.content || {}, tokens);
    frame.appendChild(content);

    const actions = figma.createFrame();
    actions.name = 'Prototype Actions';
    actions.layoutMode = 'HORIZONTAL';
    actions.counterAxisSizingMode = 'AUTO';
    actions.primaryAxisSizingMode = 'AUTO';
    actions.itemSpacing = 8;
    actions.fills = [];
    const triggers = collectTriggers(frameSpec);
    for (const trigger of triggers) actions.appendChild(createActionButton(trigger, tokens));
    frame.appendChild(actions);

    page.appendChild(frame);
    x += 1520;
  }
}

function collectTriggers(frameSpec) {
  const set = new Set();
  for (const link of frameSpec.interactions || []) {
    const trigger = String(link).split('->')[0].trim();
    if (trigger) set.add(trigger.replace(/\(.*?\)/g, '').trim());
  }
  const knownActions = (frameSpec.content && frameSpec.content.actions) || [];
  for (const a of knownActions) set.add(a);
  if (set.size === 0) set.add('Continue');
  return Array.from(set);
}

function wirePrototypeLinks(prototypePage, links) {
  if (!prototypePage) return;
  const frames = new Map();
  for (const node of prototypePage.children) {
    if (node.type === 'FRAME') frames.set(node.name, node);
  }

  for (const link of links) {
    const fromFrame = frames.get(link.from);
    const toFrame = frames.get(link.to);
    if (!fromFrame || !toFrame) continue;

    const actionsGroup = fromFrame.findOne(n => n.type === 'FRAME' && n.name === 'Prototype Actions');
    if (!actionsGroup) continue;

    const actionNode = actionsGroup.findOne(n => n.type === 'FRAME' && n.name === `Action/${link.trigger}`);
    if (!actionNode) continue;

    actionNode.reactions = [{
      trigger: { type: 'ON_CLICK' },
      action: {
        type: 'NODE',
        destinationId: toFrame.id,
        navigation: 'NAVIGATE',
        transition: {
          type: 'SMART_ANIMATE',
          easing: { type: 'EASE_IN_AND_OUT' },
          duration: 0.3
        }
      }
    }];
  }
}

function addContentBlocks(parent, content, tokens) {
  Object.entries(content).forEach(([key, value]) => {
    const card = figma.createFrame();
    card.name = key;
    card.layoutMode = 'VERTICAL';
    card.counterAxisSizingMode = 'AUTO';
    card.primaryAxisSizingMode = 'AUTO';
    card.itemSpacing = 8;
    card.paddingLeft = 12;
    card.paddingRight = 12;
    card.paddingTop = 12;
    card.paddingBottom = 12;
    card.cornerRadius = 8;
    setFrameFill(card, tokens?.colors?.['bg.subtle'] || '#F7F8FA');
    card.strokes = [{ type: 'SOLID', color: hexToRgb(tokens?.colors?.['border.default'] || '#E5E7EB') }];
    card.appendChild(createText(titleCase(key), 14, true, tokens));
    card.appendChild(createText(renderValue(value), 12, false, tokens, tokens?.colors?.['text.secondary'] || '#6B7280'));
    parent.appendChild(card);
  });
}

function addTypography(parent, styles, tokens) {
  for (const s of styles) {
    parent.appendChild(createText(`${s.name} — The quick brown fox jumps over the lazy dog`, s.size || 16, (s.weight || 400) >= 600, tokens));
  }
}

function addButtonVariants(parent, variants, tokens) {
  const comps = [];
  for (const v of variants) {
    const c = figma.createComponent();
    c.name = `Button/${v.type}/${v.state}`;
    c.layoutMode = 'HORIZONTAL';
    c.counterAxisSizingMode = 'AUTO';
    c.primaryAxisSizingMode = 'AUTO';
    c.paddingLeft = 16;
    c.paddingRight = 16;
    c.paddingTop = 10;
    c.paddingBottom = 10;
    c.cornerRadius = 8;
    c.fills = [{ type: 'SOLID', color: hexToRgb(v.type === 'Secondary' ? '#FFFFFF' : '#2563EB'), opacity: v.state === 'Disabled' ? 0.4 : 1 }];
    c.strokes = v.type === 'Secondary' ? [{ type: 'SOLID', color: hexToRgb(tokens?.colors?.['border.default'] || '#E5E7EB') }] : [];
    c.appendChild(createText(v.label || 'Button', 14, true, tokens, v.type === 'Secondary' ? '#111827' : '#FFFFFF'));
    comps.push(c);
  }
  if (comps.length > 1) figma.combineAsVariants(comps, parent);
  else comps.forEach(c => parent.appendChild(c));
}

function addCardVariants(parent, variants, tokens) {
  const comps = [];
  for (const v of variants) {
    const c = figma.createComponent();
    c.name = `Card/${v.state}`;
    c.layoutMode = 'VERTICAL';
    c.counterAxisSizingMode = 'AUTO';
    c.primaryAxisSizingMode = 'AUTO';
    c.paddingLeft = 16;
    c.paddingRight = 16;
    c.paddingTop = 16;
    c.paddingBottom = 16;
    c.itemSpacing = 6;
    c.cornerRadius = 12;
    setFrameFill(c, '#FFFFFF');
    c.strokes = [{ type: 'SOLID', color: hexToRgb(v.state === 'Selected' ? '#2563EB' : '#E5E7EB') }];
    c.appendChild(createText(v.title || 'Card title', 14, true, tokens));
    c.appendChild(createText(v.subtitle || '', 12, false, tokens, '#6B7280'));
    comps.push(c);
  }
  if (comps.length > 1) figma.combineAsVariants(comps, parent);
  else comps.forEach(c => parent.appendChild(c));
}

function addBadgeVariants(parent, variants, tokens) {
  const comps = [];
  for (const v of variants) {
    const c = figma.createComponent();
    c.name = `Badge/${v.type}/${v.label}`;
    c.layoutMode = 'HORIZONTAL';
    c.counterAxisSizingMode = 'AUTO';
    c.primaryAxisSizingMode = 'AUTO';
    c.paddingLeft = 10;
    c.paddingRight = 10;
    c.paddingTop = 4;
    c.paddingBottom = 4;
    c.cornerRadius = 999;
    const color = badgeColor(v.label);
    c.fills = [{ type: 'SOLID', color: hexToRgb(color), opacity: 0.12 }];
    c.strokes = [{ type: 'SOLID', color: hexToRgb(color), opacity: 0.4 }];
    c.appendChild(createText(v.label, 12, true, tokens, color));
    comps.push(c);
  }
  if (comps.length > 1) figma.combineAsVariants(comps, parent);
  else comps.forEach(c => parent.appendChild(c));
}

function addRatingScale(parent, section, tokens) {
  const comp = figma.createComponent();
  comp.name = 'RatingScale/1-5';
  comp.layoutMode = 'VERTICAL';
  comp.counterAxisSizingMode = 'AUTO';
  comp.primaryAxisSizingMode = 'AUTO';
  comp.itemSpacing = 8;
  comp.paddingLeft = 12;
  comp.paddingRight = 12;
  comp.paddingTop = 12;
  comp.paddingBottom = 12;
  comp.cornerRadius = 8;
  setFrameFill(comp, '#FFFFFF');
  comp.strokes = [{ type: 'SOLID', color: hexToRgb('#E5E7EB') }];

  comp.appendChild(createText(section.helper || '', 12, false, tokens, '#6B7280'));

  const row = figma.createFrame();
  row.layoutMode = 'HORIZONTAL';
  row.counterAxisSizingMode = 'AUTO';
  row.primaryAxisSizingMode = 'AUTO';
  row.itemSpacing = 8;
  row.fills = [];

  [1, 2, 3, 4, 5].forEach((n, i) => {
    const chip = figma.createFrame();
    chip.layoutMode = 'HORIZONTAL';
    chip.counterAxisSizingMode = 'AUTO';
    chip.primaryAxisSizingMode = 'AUTO';
    chip.paddingLeft = 8;
    chip.paddingRight = 8;
    chip.paddingTop = 4;
    chip.paddingBottom = 4;
    chip.cornerRadius = 999;
    chip.strokes = [{ type: 'SOLID', color: hexToRgb('#D1D5DB') }];
    chip.fills = [{ type: 'SOLID', color: hexToRgb('#FFFFFF') }];
    chip.appendChild(createText(`${n} ${section.labels?.[i] || ''}`.trim(), 12, false, tokens));
    row.appendChild(chip);
  });

  comp.appendChild(row);
  parent.appendChild(comp);
}

function addProgressSamples(parent, samples, tokens) {
  for (const sample of samples) {
    const wrap = figma.createFrame();
    wrap.layoutMode = 'VERTICAL';
    wrap.counterAxisSizingMode = 'AUTO';
    wrap.primaryAxisSizingMode = 'AUTO';
    wrap.itemSpacing = 6;
    wrap.fills = [];
    wrap.appendChild(createText(`${sample.value}%`, 12, true, tokens));

    const bar = figma.createFrame();
    bar.resize(320, 10);
    bar.cornerRadius = 999;
    bar.fills = [{ type: 'SOLID', color: hexToRgb('#E5E7EB') }];

    const fill = figma.createRectangle();
    fill.resize(Math.max(0, Math.min(320, Math.round(320 * (sample.value / 100)))), 10);
    fill.cornerRadius = 999;
    fill.fills = [{ type: 'SOLID', color: hexToRgb('#2563EB') }];

    bar.appendChild(fill);
    wrap.appendChild(bar);
    parent.appendChild(wrap);
  }
}

function addTable(parent, columns, tokens) {
  const table = figma.createFrame();
  table.layoutMode = 'VERTICAL';
  table.counterAxisSizingMode = 'AUTO';
  table.primaryAxisSizingMode = 'AUTO';
  table.fills = [];

  const header = figma.createFrame();
  header.layoutMode = 'HORIZONTAL';
  header.counterAxisSizingMode = 'AUTO';
  header.primaryAxisSizingMode = 'AUTO';
  header.itemSpacing = 12;
  header.fills = [];

  for (const col of columns) header.appendChild(createText(col, 12, true, tokens));
  table.appendChild(header);
  parent.appendChild(table);
}

function addModal(parent, section, tokens) {
  const modal = figma.createComponent();
  modal.name = 'Modal/Confirmation';
  modal.layoutMode = 'VERTICAL';
  modal.counterAxisSizingMode = 'AUTO';
  modal.primaryAxisSizingMode = 'AUTO';
  modal.itemSpacing = 12;
  modal.paddingLeft = 16;
  modal.paddingRight = 16;
  modal.paddingTop = 16;
  modal.paddingBottom = 16;
  modal.cornerRadius = 12;
  setFrameFill(modal, '#FFFFFF');
  modal.strokes = [{ type: 'SOLID', color: hexToRgb('#E5E7EB') }];
  modal.appendChild(createText(section.title || 'Confirm', 14, true, tokens));

  const actions = figma.createFrame();
  actions.layoutMode = 'HORIZONTAL';
  actions.counterAxisSizingMode = 'AUTO';
  actions.primaryAxisSizingMode = 'AUTO';
  actions.itemSpacing = 8;
  actions.fills = [];

  (section.actions || []).forEach(a => actions.appendChild(createActionButton(a, tokens)));
  modal.appendChild(actions);
  parent.appendChild(modal);
}

function addStepper(parent, steps, tokens) {
  const comp = figma.createComponent();
  comp.name = 'Stepper/Flow';
  comp.layoutMode = 'HORIZONTAL';
  comp.counterAxisSizingMode = 'AUTO';
  comp.primaryAxisSizingMode = 'AUTO';
  comp.itemSpacing = 8;
  comp.paddingLeft = 12;
  comp.paddingRight = 12;
  comp.paddingTop = 8;
  comp.paddingBottom = 8;
  comp.cornerRadius = 8;
  setFrameFill(comp, '#FFFFFF');
  comp.strokes = [{ type: 'SOLID', color: hexToRgb('#E5E7EB') }];

  steps.forEach((s, i) => {
    comp.appendChild(createText(s, 12, i === 0, tokens, i === 0 ? '#2563EB' : '#6B7280'));
    if (i < steps.length - 1) comp.appendChild(createText('→', 12, false, tokens, '#9CA3AF'));
  });

  parent.appendChild(comp);
}

function addBanners(parent, states, tokens) {
  states.forEach(s => {
    const b = figma.createComponent();
    b.name = `Banner/${s}`;
    b.layoutMode = 'HORIZONTAL';
    b.counterAxisSizingMode = 'AUTO';
    b.primaryAxisSizingMode = 'AUTO';
    b.paddingLeft = 12;
    b.paddingRight = 12;
    b.paddingTop = 8;
    b.paddingBottom = 8;
    b.cornerRadius = 8;
    b.fills = [{ type: 'SOLID', color: hexToRgb('#DBEAFE') }];
    b.strokes = [{ type: 'SOLID', color: hexToRgb('#93C5FD') }];
    b.appendChild(createText(s, 12, true, tokens, '#1D4ED8'));
    parent.appendChild(b);
  });
}

function createActionButton(label, tokens) {
  const btn = figma.createFrame();
  btn.name = `Action/${label}`;
  btn.layoutMode = 'HORIZONTAL';
  btn.counterAxisSizingMode = 'AUTO';
  btn.primaryAxisSizingMode = 'AUTO';
  btn.paddingLeft = 12;
  btn.paddingRight = 12;
  btn.paddingTop = 8;
  btn.paddingBottom = 8;
  btn.cornerRadius = 8;
  btn.fills = [{ type: 'SOLID', color: hexToRgb('#2563EB') }];
  btn.appendChild(createText(label, 12, true, tokens, '#FFFFFF'));
  return btn;
}

function createText(value, size, bold, tokens, colorHex) {
  const t = figma.createText();
  t.fontName = { family: 'Inter', style: bold ? 'Bold' : 'Regular' };
  t.characters = String(value ?? '');
  t.fontSize = size;
  t.fills = [{ type: 'SOLID', color: hexToRgb(colorHex || tokens?.colors?.['text.primary'] || '#111827') }];
  return t;
}

function renderValue(value) {
  if (Array.isArray(value)) {
    return value
      .map(v => {
        if (typeof v === 'string') return `• ${v}`;
        if (v && typeof v === 'object') return `• ${JSON.stringify(v)}`;
        return `• ${String(v)}`;
      })
      .join('\n');
  }
  if (value && typeof value === 'object') {
    return Object.entries(value)
      .map(([k, v]) => `${k}: ${typeof v === 'object' ? JSON.stringify(v) : v}`)
      .join('\n');
  }
  return String(value);
}

function titleCase(v) {
  return String(v).replace(/([A-Z])/g, ' $1').replace(/^./, m => m.toUpperCase());
}

function badgeColor(label) {
  if (label === 'Good' || label === 'Approved') return '#16A34A';
  if (label === 'Needs Improvement' || label === 'Sent') return '#F59E0B';
  if (label === 'Clear Gap' || label === 'Gap' || label === 'Draft') return '#DC2626';
  return '#2563EB';
}

function setFrameFill(node, hex) {
  node.fills = [{ type: 'SOLID', color: hexToRgb(hex) }];
}

function hexToRgb(hex) {
  const raw = String(hex).replace('#', '');
  const value = parseInt(raw, 16);
  return {
    r: ((value >> 16) & 255) / 255,
    g: ((value >> 8) & 255) / 255,
    b: (value & 255) / 255
  };
}

main();
