import React from 'react';

import { mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import Theme from '../../styles/theme';

const wrapComponentInTheme = () => ({ children }) => (
  <ThemeProvider theme={Theme}>{children}</ThemeProvider>
);

export const mountWithTheme = (component) => {
  return mount(component, {
    wrappingComponent: wrapComponentInTheme()
  });
};

export const shallowWithTheme = (component) => {
  return shallow(component, {
    wrappingComponent: wrapComponentInTheme()
  });
};
