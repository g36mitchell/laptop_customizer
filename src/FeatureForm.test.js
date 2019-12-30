import React from 'react';
import ReactDOM from 'react-dom';
//import { shallow } from 'enzyme';
//import toJson from 'enzyme-to-json';
import FeatureForm from './FeatureForm';

describe(`FeatureForm component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<FeatureForm />, div);
        ReactDOM.unmountComponentAtNode(div);
      });
/*

	it('renders empty given no props', () => {
		const wrapper = shallow(<FeatureForm />)
		expect(toJson(wrapper)).toMatchSnapshot()
	})

	it('renders the item when supplied', () => {
        const testFeatures = { Processor: [
            {
              name: '17th Generation Intel Core HB (7 Core with donut spare)',
              cost: 700
            },
            {
              name: 'Professor X AMD Fire Breather with sidewinder technology',
              cost: 1200
            }
          ], 
        };
        const testSelected = {
            Processor: {
              name: '17th Generation Intel Core HB (7 Core with donut spare)',
              cost: 700
            },
        };
		const wrapper = shallow(<FeatureForm features={testFeatures} selected={testSelected} />)
		expect(toJson(wrapper)).toMatchSnapshot()
	})
*/
})