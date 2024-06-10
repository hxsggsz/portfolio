import type { colors } from './constants';

export type Colors = typeof colors;
export type Primary = keyof Colors;

export type PrimaryColorKeys = {
  [K in Primary]: keyof Colors[K];
}[Primary];
