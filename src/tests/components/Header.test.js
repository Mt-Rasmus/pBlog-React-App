
import React from 'react';
import { Header } from '../../components/Header';
import { shallow } from 'enzyme';
//import toJSON from 'enzyme-to-json';

test('Should render Header correctly', () => {
   const wrapper = shallow(<Header startLogout={() => { }}/>);
   //expect(toJSON(wrapper)).toMatchSnapshot(); // only needed first time (install)
   expect(wrapper).toMatchSnapshot();
});

// make sure the correct prop gets called when push button, do it with spies
test('Should call startLogout on button click', () => {
   let startLogout = jest.fn(); // creating a spy
   const wrapper = shallow(<Header startLogout={startLogout} />);
   wrapper.find('button').simulate('click');
   expect(startLogout).toHaveBeenCalled();
});