/**
 * Pseudo-Figma plugin scaffold for generating the prototype structure.
 * This is intentionally simplified so designers can adapt it in a real Figma plugin.
 *
 * Usage:
 * 1) Load figma/prototype_ui_structure.json.
 * 2) Iterate pages/components/frames.
 * 3) Apply tokens from figma/tokens.json.
 */

async function run() {
  const structure = await loadJson('figma/prototype_ui_structure.json');
  const tokens = await loadJson('figma/tokens.json');

  // 1) Create pages
  const designSystemPage = figma.createPage();
  designSystemPage.name = 'Design System';
  const prototypePage = figma.createPage();
  prototypePage.name = 'Prototype';

  // 2) Build design system components
  await buildButtons(designSystemPage, tokens);
  await buildCards(designSystemPage, tokens);
  await buildRatingScale(designSystemPage, tokens, ['Very Low', 'Low', 'Medium', 'Good', 'Excellent']);
  await buildBadges(designSystemPage, tokens);
  await buildProgressBar(designSystemPage, tokens);
  await buildTable(designSystemPage, tokens);
  await buildModal(designSystemPage, tokens);
  await buildStepper(designSystemPage, tokens);

  // 3) Build prototype frames in exact order
  const frames = [
    '01 Sector Selection',
    '02 Job Level Selection',
    '03 Smart Assessment Form',
    '04 Results & Gap Analysis',
    '05 Recommendation Dashboard',
    '06 Approval Workflow',
    '07 Report'
  ];

  let x = 0;
  for (const frameName of frames) {
    const frameSpec = structure.pages
      .find(p => p.name === 'Prototype')
      .frames.find(f => f.name === frameName);

    const frame = figma.createFrame();
    frame.name = frameName;
    frame.resize(1440, 1024);
    frame.layoutMode = 'VERTICAL';
    frame.counterAxisSizingMode = 'FIXED';
    frame.primaryAxisSizingMode = 'AUTO';
    frame.paddingLeft = 32;
    frame.paddingRight = 32;
    frame.paddingTop = 32;
    frame.paddingBottom = 32;
    frame.itemSpacing = 24;
    frame.x = x;
    x += 1520;

    const title = createText(frameSpec.header, 'Title', tokens);
    frame.appendChild(title);

    // Create the rest of content blocks with auto-layout sections.
    await createFrameContent(frame, frameSpec, tokens);

    prototypePage.appendChild(frame);
  }

  // 4) Add interactions per user flow
  await wirePrototyping(structure.prototypeConnections);

  figma.notify('Prototype structure generated.');
  figma.closePlugin();
}

function createText(value, styleName, tokens) {
  const t = figma.createText();
  t.characters = value;
  t.fontName = { family: tokens.typography.fontFamily, style: 'Regular' };
  if (styleName === 'Title') t.fontSize = tokens.typography.title;
  if (styleName === 'Section') t.fontSize = tokens.typography.section;
  if (styleName === 'Body') t.fontSize = tokens.typography.body;
  if (styleName === 'Caption') t.fontSize = tokens.typography.caption;
  t.fills = [{ type: 'SOLID', color: hexToRgb(tokens.color.text.primary) }];
  return t;
}

function hexToRgb(hex) {
  const raw = hex.replace('#', '');
  const val = parseInt(raw, 16);
  return {
    r: ((val >> 16) & 255) / 255,
    g: ((val >> 8) & 255) / 255,
    b: (val & 255) / 255
  };
}

run();
