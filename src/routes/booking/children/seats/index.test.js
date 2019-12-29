import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Seats from './index';

describe('Test Seats component', () => {
	test('Snapshot seats', () => {
		const component = renderer.create(<Seats />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	const component = mount(<Seats />);
	test('Check each row has name and inner', () => {
		expect(component.find('.row.name')).toBeTruthy();
		expect(component.find('.row.inner')).toBeTruthy();
	});
});
