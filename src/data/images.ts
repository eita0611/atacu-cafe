// scripts/build-images.mjs が生成します。手で編集しないでください。
export const images = {
  'cheesecake-coffee': {
    width: 1000,
    height: 1000,
    widths: [480, 800, 1000],
  },
  'coffee-hands': {
    width: 1000,
    height: 1000,
    widths: [480, 800, 1000],
  },
  'coffee-window': {
    width: 2200,
    height: 940,
    widths: [480, 800, 1200, 1600, 2000, 2200],
  },
  'grilled-vegetable-rice': {
    width: 1200,
    height: 1500,
    widths: [480, 800, 1200],
  },
  hero: {
    width: 1920,
    height: 1088,
    widths: [480, 800, 1200, 1600, 1920],
  },
  'lunch-table': {
    width: 1600,
    height: 1000,
    widths: [480, 800, 1200, 1600],
  },
  'pudding-closeup': {
    width: 1000,
    height: 1250,
    widths: [480, 800, 1000],
  },
  'salad-bowl': {
    width: 1000,
    height: 1333,
    widths: [480, 800, 1000],
  },
  'sweets-cheesecake': {
    width: 1000,
    height: 1333,
    widths: [480, 800, 1000],
  },
  'sweets-matcha-roll': {
    width: 1000,
    height: 1333,
    widths: [480, 800, 1000],
  },
  'sweets-pudding': {
    width: 1000,
    height: 1000,
    widths: [480, 800, 1000],
  },
  'sweets-trifle': {
    width: 1000,
    height: 1000,
    widths: [480, 800, 1000],
  },
  'table-window': {
    width: 1000,
    height: 1000,
    widths: [480, 800, 1000],
  },
  'taco-rice': {
    width: 1800,
    height: 1200,
    widths: [480, 800, 1200, 1600, 1800],
  },
  'vegetable-bowl': {
    width: 1200,
    height: 1600,
    widths: [480, 800, 1200],
  },
  'window-bench': {
    width: 1600,
    height: 1000,
    widths: [480, 800, 1200, 1600],
  },
  'window-seat': {
    width: 1200,
    height: 1500,
    widths: [480, 800, 1200],
  },
  workbench: {
    width: 1600,
    height: 1000,
    widths: [480, 800, 1200, 1600],
  },
} as const

export type ImageName = keyof typeof images
