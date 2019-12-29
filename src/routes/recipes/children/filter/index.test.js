import React from 'react';
import renderer from 'react-test-renderer';
import Filter from './index';

describe('Test Recipes/Filter component', () => {
	test('Snapshot filter', () => {
		const component = renderer.create(<Filter />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
