import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Item from './index';

describe('Test Booking/Note/Item component', () => {
	test('Snapshot note item without type and content', () => {
		const component = renderer.create(<Item />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	test('Snapshot note item with type not right', () => {
		const component = renderer.create(<Item type='asdfsdf' />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	const component = mount(<Item type='booked' content='fsadfasd' />);
	test('Check item content', () => {
		expect(component.find('.content')).toBeTruthy();
	});
});
