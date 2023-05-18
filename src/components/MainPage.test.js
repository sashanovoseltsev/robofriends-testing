import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  }
  wrapper = shallow(<MainPage { ...mockProps} />)
});

it ('expects to render MainPage component', () => {
  expect(wrapper).toMatchSnapshot();
}); 

it('filters robots correctly', () => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [{ 
      id: 1,
      name: 'sasha',
      email: 'sasha@email.com'
    }],
    searchField: 'sas',
    isPending: false
  }

  const wrapper2 = shallow(<MainPage {...mockProps}/>);
  expect(wrapper2.instance().filterRobots()).toEqual([{ 
    id: 1,
    name: 'sasha',
    email: 'sasha@email.com'
  }]);
})

it('filters robots correctly with empty search field', () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{ 
      id: 1,
      name: 'sasha',
      email: 'sasha@email.com'
    },
    { 
      id: 2,
      name: 'sasha',
      email: 'sasha@email.com'
    }],
    searchField: '', 
    isPending: false
  }

  const wrapper3 = shallow(<MainPage {...mockProps2}/>);
  expect(wrapper3.instance().filterRobots().length).toBe(2);
})

it('renders Loading in case isPending=true', () => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '', 
    isPending: true
  }

  const wrapper4 = shallow(<MainPage {...mockProps}/>);
  const h1Nodes = wrapper4.find('h1');
  expect(h1Nodes.length).toBe(1);
  expect(h1Nodes.text()).toEqual('Loading');
})

it('renders CardList in case isPending=false', () => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [{ 
      id: 1,
      name: 'sasha',
      email: 'sasha@email.com'
    },
    { 
      id: 2,
      name: 'sasha',
      email: 'sasha@email.com'
    }],
    searchField: '', 
    isPending: false
  }

  const wrapper5 = shallow(<MainPage {...mockProps}/>);
  const cardListNodes = wrapper5.find('CardList');
  expect(cardListNodes.length).toBe(1);
  expect(cardListNodes.props().robots.length).toBe(2);
})