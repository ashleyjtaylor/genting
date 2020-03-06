import React from 'react';
import { shallowWithTheme } from '../../__test__/mocks/themeMock';

import Error from './Error';

const notFound = '404 Not found';
const notFoundCaption = 'This page could not be found';
const serverError = '500 Server error';
const serverErrorCaption = 'Something went wrong';

describe('<Error />', () => {
  it('should render the 404 page', () => {
    const wrapper = shallowWithTheme(<Error statusCode={404} />);

    expect(wrapper.find('h1').text()).toEqual(notFound);
    expect(wrapper.find('h4').text()).toEqual(notFoundCaption);
  });

  it('should render the 500 page', () => {
    const wrapper = shallowWithTheme(<Error statusCode={500} />);

    expect(wrapper.find('h1').text()).toEqual(serverError);
    expect(wrapper.find('h4').text()).toEqual(serverErrorCaption);
  });

  it('should default to the 500 page', () => {
    const wrapper = shallowWithTheme(<Error statusCode={100} />);

    expect(wrapper.find('h1').text()).toEqual(serverError);
    expect(wrapper.find('h4').text()).toEqual(serverErrorCaption);
  });
});
