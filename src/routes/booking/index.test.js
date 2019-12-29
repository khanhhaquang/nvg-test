import React from 'react';
import renderer from 'react-test-renderer';
import Booking from './index';

describe('Test Booking component', () => {
	test('Snapshot booking', () => {
		const component = renderer.create(<Booking />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
