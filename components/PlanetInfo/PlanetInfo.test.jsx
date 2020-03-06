import React from 'react';
import { shallowWithTheme } from '../../__test__/mocks/themeMock';

import planetInfoMock from '../../__test__/mocks/data/planetInfoMock';

import PlanetInfo from './PlanetInfo';

describe('<PlanetInfo />', () => {
  const wrapper = shallowWithTheme(<PlanetInfo {...planetInfoMock} />);

  it('should render the name', () => {
    const expected = 'Tatooine';
    expect(wrapper.find('Name').text()).toEqual(expected);
  });

  it('should render the climate', () => {
    const expected = 'hot';
    expect(wrapper.find('TextLabel').at(0).props().text).toEqual(expected);
  });

  it('should render the population', () => {
    const expected = '20000';
    expect(wrapper.find('TextLabel').at(1).props().text).toEqual(expected);
  });
});
