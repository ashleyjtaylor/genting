import React from 'react';
import { shallowWithTheme } from '../../../__test__/mocks/themeMock';

import TextLabel from './TextLabel';

describe('<TextLabel />', () => {
  it('should render a text and a label', () => {
    const expectedLabel = 'test-label';
    const expectedText = 'test';

    const wrapper = shallowWithTheme(<TextLabel text="test" label="test-label" />);
  
    expect(wrapper.find('h5').text()).toEqual(expectedLabel);
    expect(wrapper.find('span').text()).toEqual(expectedText);
  });
});
