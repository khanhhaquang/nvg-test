import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Note from './index';

describe('Test Booking/Note component', () => {
	test('Snapshot note', () => {
		const component = renderer.create(<Note />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	const component = mount(<Note />);
	test('Check note status and type', () => {
		expect(component.find('.status')).toBeTruthy();
		expect(component.find('.ticket-types')).toBeTruthy();
	});

	test('Check info price', () => {
		expect(component.find('.price.total')).not.toBeNaN();
		expect(component.find('.price.currency')).toBeTruthy();
	});
});
