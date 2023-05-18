import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

const robots = [
  {
    id: 1,
    name: 'Sasha',
    email: 'sasha@gmail.com'
  },
  {
    id: 2,
    name: 'Misha',
    email: 'misha@gmail.com'
  },
  {
    id: 3,
    name: 'Kolya',
    email: 'kolya@gmail.com'
  }
]

it('expects to render CardList', () => {
  expect(shallow(<CardList robots={robots}/>)).toMatchSnapshot();
});