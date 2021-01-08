import { CellType } from 'shared';

type CellDataSquare = {
  next: number;
  square: boolean;
  path: 'top' | 'bottom';
  type: 'start' | 'prison' | 'jackpot' | 'vacation';
};

type CellDataCompany = {
  next: number;
  square: boolean;
  path: CellType['path'];
  type: 'company';
};

type CellDataRandom = {
  next: number;
  square: boolean;
  path: CellType['path'];
  type: 'riddle' | 'tax';
};

type CellsData = {
  [key: number]: CellDataSquare | CellDataCompany | CellDataRandom;
};

export const cellsData: CellsData = {
  0: {
    next: 1,
    square: true,
    path: 'top',
    type: 'start',
  },
  1: {
    next: 2,
    square: false,
    path: 'top',
    type: 'company',
  },
  2: {
    next: 3,
    square: false,
    path: 'top',
    type: 'riddle',
  },
  3: {
    next: 4,
    square: false,
    path: 'top',
    type: 'company',
  },
  4: {
    next: 5,
    square: false,
    path: 'top',
    type: 'tax',
  },
  5: {
    next: 6,
    square: false,
    path: 'top',
    type: 'company',
  },
  6: {
    next: 5,
    square: false,
    path: 'top',
    type: 'company',
  },
  7: {
    next: 8,
    square: false,
    path: 'top',
    type: 'riddle',
  },
  8: {
    next: 9,
    square: false,
    path: 'top',
    type: 'company',
  },
  9: {
    next: 10,
    square: false,
    path: 'top',
    type: 'company',
  },
  10: {
    next: 11,
    square: true,
    path: 'top',
    type: 'prison',
  },
  11: {
    next: 12,
    square: false,
    path: 'right',
    type: 'company',
  },
  12: {
    next: 13,
    square: false,
    path: 'right',
    type: 'company',
  },
  13: {
    next: 14,
    square: false,
    path: 'right',
    type: 'company',
  },
  14: {
    next: 15,
    square: false,
    path: 'right',
    type: 'company',
  },
  15: {
    next: 16,
    square: false,
    path: 'right',
    type: 'company',
  },
  16: {
    next: 17,
    square: false,
    path: 'right',
    type: 'company',
  },
  17: {
    next: 18,
    square: false,
    path: 'right',
    type: 'riddle',
  },
  18: {
    next: 19,
    square: false,
    path: 'right',
    type: 'company',
  },
  19: {
    next: 20,
    square: false,
    path: 'right',
    type: 'company',
  },
  20: {
    next: 21,
    square: true,
    path: 'bottom',
    type: 'jackpot',
  },
  21: {
    next: 22,
    square: false,
    path: 'bottom',
    type: 'company',
  },
  22: {
    next: 23,
    square: false,
    path: 'bottom',
    type: 'riddle',
  },
  23: {
    next: 24,
    square: false,
    path: 'bottom',
    type: 'company',
  },
  24: {
    next: 25,
    square: false,
    path: 'bottom',
    type: 'company',
  },
  25: {
    next: 26,
    square: false,
    path: 'bottom',
    type: 'company',
  },
  26: {
    next: 27,
    square: false,
    path: 'bottom',
    type: 'company',
  },
  27: {
    next: 28,
    square: false,
    path: 'bottom',
    type: 'company',
  },
  28: {
    next: 29,
    square: false,
    path: 'bottom',
    type: 'company',
  },
  29: {
    next: 30,
    square: false,
    path: 'bottom',
    type: 'company',
  },
  30: {
    next: 31,
    square: true,
    path: 'bottom',
    type: 'vacation',
  },
  31: {
    next: 32,
    square: false,
    path: 'left',
    type: 'company',
  },
  32: {
    next: 33,
    square: false,
    path: 'left',
    type: 'company',
  },
  33: {
    next: 34,
    square: false,
    path: 'left',
    type: 'riddle',
  },
  34: {
    next: 35,
    square: false,
    path: 'left',
    type: 'company',
  },
  35: {
    next: 36,
    square: false,
    path: 'left',
    type: 'company',
  },
  36: {
    next: 37,
    square: false,
    path: 'left',
    type: 'riddle',
  },
  37: {
    next: 38,
    square: false,
    path: 'left',
    type: 'company',
  },
  38: {
    next: 39,
    square: false,
    path: 'left',
    type: 'riddle',
  },
  39: {
    next: 0,
    square: false,
    path: 'left',
    type: 'company',
  },
};
