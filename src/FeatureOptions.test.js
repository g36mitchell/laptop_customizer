import React from 'react';
import ReactDOM from 'react-dom';
//import { shallow } from 'enzyme';
//import toJson from 'enzyme-to-json';
import FeatureOptions from './FeatureOptions';

describe(`FeatureOptions component`, () => {

    const feature = 'Feature-1';
    const testOptions = [
        {
          name: 'Feature-1 Option A',
          cost: 100
        },
        {
          name: 'Feature-1 Option B',
          cost: 200
        }
      ];
    const testSelected = [{
          name: 'Feature-1 Option A',
          cost: 100
    }];

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<FeatureOptions feature={feature} options={testOptions} selected={testSelected} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

/*
	it('renders empty given no props', () => {
		const wrapper = shallow(<FeatureOptions />)
		expect(toJson(wrapper)).toMatchSnapshot()
	})

	it('renders the item when supplied', () => {
        const feature = 'Processor';
        const testFeatures = [
            {
              name: '17th Generation Intel Core HB (7 Core with donut spare)',
              cost: 700
            },
            {
              name: 'Professor X AMD Fire Breather with sidewinder technology',
              cost: 1200
            }
          ];
        const testSelected = {
              name: '17th Generation Intel Core HB (7 Core with donut spare)',
              cost: 700
        };

		const wrapper = shallow(<FeatureOptions feature={feature} options={testFeatures} selected={testSelected} />)
		expect(toJson(wrapper)).toMatchSnapshot()
	})
*/
})