import React from 'react';
import { shallowWithTheme } from '../../../__test__/mocks/themeMock';

import ButtonLink from './ButtonLink';

describe('<ButtonLink />', () => {
  it('should render a link with text and a url', () => {
    const expectedUrl = 'http://test-link';
    const expectedText = 'test';

    const wrapper = shallowWithTheme(<ButtonLink text="test" url="http://test-link" />);
  
    expect(wrapper.props().href).toEqual(expectedUrl);
    expect(wrapper.text()).toEqual(expectedText);
  });
});
