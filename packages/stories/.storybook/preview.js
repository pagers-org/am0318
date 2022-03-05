import React from 'react';
import { ThemeProvider, convert, themes } from '@storybook/theming';

export const parameters = {
  options: {
    storySort: {
      order: ['common'],
    },
  },
};

export const decorators = [
  (StoryFn) => (
    <ThemeProvider theme={convert(themes.light)}>
      <StoryFn />
    </ThemeProvider>
  ),
];
