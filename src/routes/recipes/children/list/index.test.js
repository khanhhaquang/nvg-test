import React from 'react';
import renderer from 'react-test-renderer';
import List from './index';

describe('Test Recipes/List component', () => {
	test('Snapshot list', () => {
		const component = renderer.create(<List />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
