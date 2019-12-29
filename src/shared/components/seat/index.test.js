import React from 'react';
import renderer from 'react-test-renderer';
import Seat from './index';

describe('Test Seat component', () => {
	test('Snapshot seat with type + number', () => {
		const component = renderer.create(<Seat type='standard' number={1} />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	test('Snapshot seat no type + number', () => {
		const component = renderer.create(<Seat />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
