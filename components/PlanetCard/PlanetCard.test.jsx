import React from 'react';
import { mountWithTheme } from '../../__test__/mocks/themeMock';

import planetCardMock from '../../__test__/mocks/data/planetCardMock';

import PlanetCard from './PlanetCard';

describe('<PlanetCard />', () => {
  const wrapper = mountWithTheme(<PlanetCard {...planetCardMock} />);

  it('should render the correct link', () => {
    const expectedLink = '/planets/tatooine';
    expect(wrapper.find('a').props().href).toEqual(expectedLink);
  });

  it('should render an image', () => {
    const expectedImage = '/tatooine-image';
    expect(wrapper.find('img').props().src).toEqual(expectedImage);
  });

  it('should render the correct title', () => {
    const expectedTitle = 'Tatooine';
    expect(wrapper.find('Name').text()).toEqual(expectedTitle);
  });
});
