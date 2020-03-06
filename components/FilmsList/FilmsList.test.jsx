import React from 'react';
import { shallowWithTheme } from '../../__test__/mocks/themeMock';

import filmsMock from '../../__test__/mocks/data/filmsMock';

import FilmsList from './FilmsList';

describe('<FilmsList />', () => {
  const wrapper = shallowWithTheme(<FilmsList films={filmsMock} />);

  it('should render the Headings', () => {
    expect(wrapper.find('Heading').at(0).text()).toEqual('Title');
    expect(wrapper.find('Heading').at(1).text()).toEqual('Director');
  });

  it('should render a list of films', () => {
    const expectedTitle = 'A New Hope';
    const expectedDirector = 'George Lucas';
    const expectedReleaseDate = '25 May 1977';

    expect(wrapper.find('Film').at(0).find('FilmTitle').find('span').text()).toEqual(expectedTitle);
    expect(wrapper.find('Film').at(0).find('FilmTitle').find('time').text()).toEqual(expectedReleaseDate);
    expect(wrapper.find('Film').at(0).find('FilmDirector').at(0).text()).toEqual(expectedDirector);
  });
});
