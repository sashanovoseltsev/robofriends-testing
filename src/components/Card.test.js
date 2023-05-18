import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

// it('renders without crashing', () => {
//   expect(shallow(<Card/>)).toMatchSnapshot();
// });

it('expect to render Card component', () => {
  expect(shallow(<Card />).length).toBe(1);
});