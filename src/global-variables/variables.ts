import { DefaultTheme } from 'styled-components';

export const colors = {
  blue: {
    blue100: '#ccccff',
    blue200: '#9999ff',
    blue300: '#6666ff',
    blue400: '#3333ff',
    blue500: '#0000ff',
    blue600: '#0000cc',
    blue700: '#000099',
    blue800: '#000066',
    blue900: '#000033',
  },
  orange: {
    orange100: '#ffedcc',
    orange200: '#ffdb99',
    orange300: '#ffc966',
    orange400: '#ffb733',
    orange500: '#ffa500',
    orange600: '#cc8400',
    orange700: '#996300',
    orange800: '#664200',
    orange900: '#332100',
  },
  grey: {
    grey100: '#f1f5f9',
    grey200: '#e2e8f0',
    grey300: '#cbd5e1',
    grey400: '#94a3b8',
    grey500: '#64748b',
    grey600: '#475569',
    grey700: '#334155',
    grey800: '#1e293b',
    grey900: '#0f172a',
  },
  others: {
    black: '#000000',
    white: '#ffffff',
    redLight: '#f8d7da',
    redDark: '#842029',
    greenLight: '#d1e7dd',
    greenDark: '#0f5132',
  },
};

export const sizes = {
  borderRadius: '0.5rem',
  maxWidth: '1170px',
};

export const Theme: DefaultTheme = {
  backgroundColor: colors.grey.grey800,
  textColor: colors.grey.grey100,
  blue: colors.blue.blue400,
  black: colors.others.black,
  cancel: colors.others.redDark,
};
