import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from './index';

describe('Test Recipes/Pagination component', () => {
	test('Snapshot list', () => {
		const component = renderer.create(<Pagination />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
