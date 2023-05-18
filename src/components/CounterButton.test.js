import CounterButton from './CounterButton';
import { shallow } from 'enzyme';
import React from 'react';

it('expects CounterButton to render', () => {
  const mockColor = 'red';
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it('correctly increments the counter', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor}/>);
  var counterBtn = wrapper.find('[id="counter"]');
  expect(wrapper.state()).toEqual({count: 0});
  counterBtn.simulate('click');
  expect(wrapper.state()).toEqual({count: 1});
  counterBtn.simulate('click');
  expect(wrapper.state()).toEqual({count: 2});
  counterBtn.simulate('keypress');
  expect(wrapper.state()).toEqual({count: 2});
});

it('stores color in props', () => {
  const mockColor = 'red';
  const wrapper = shallow(<CounterButton color={mockColor}/>);
  expect(wrapper.props().color).toEqual(mockColor);
})