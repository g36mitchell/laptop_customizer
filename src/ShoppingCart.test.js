import React from 'react';
import ReactDOM from 'react-dom';
//import { shallow } from 'enzyme';
//import toJson from 'enzyme-to-json';
import ShoppingCart from './ShoppingCart';

describe(`ShoppingCart component`, () => {

    it('renders without crashing', () => {

        const testSelected = {
            selected: {
              'Feature-1': {
                name: 'Selected option Feature-1',
                cost: 100
              },
              'Feature-2': {
                name: 'Selected option Feature-2',
                cost: 100
              },
              'Feature-3': {
                name: 'Selected option Feature-3',
                cost: 100
              },
              'Feature-4': {
                name: 'Selected option Feature-4',
                cost: 100
              }
            }
        };

        const div = document.createElement('div');
        ReactDOM.render(<ShoppingCart selected={testSelected} />, div);
        ReactDOM.unmountComponentAtNode(div);
      });

/*
	it('renders empty given no props', () => {
		const wrapper = shallow(<ShoppingCart />)
		expect(toJson(wrapper)).toMatchSnapshot()
	})

	it('renders the item when supplied', () => {

        const testSelected = {
            Processor: {
              name: '17th Generation Intel Core HB (7 Core with donut spare)',
              cost: 700
            },
        };
		const wrapper = shallow(<ShoppingCart selected={testSelected} />)
		expect(toJson(wrapper)).toMatchSnapshot()
	})
*/
})