
import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

let wrapper;

beforeEach(() => {
   wrapper = shallow(<LoginPage />)
});

test('Should render LoginPage correctly', () => {
   expect(wrapper).toMatchSnapshot();
});

// make sure the correct prop gets called when push button, do it with spies
test('Should call startLogin on button click', () => {
   let startLogin = jest.fn(); // creating a spy
   const wrapper = shallow(<LoginPage startLogin={startLogin} />);
   wrapper.find('button').simulate('click');
   expect(startLogin).toHaveBeenCalled(); // expect the spy to have been called
});