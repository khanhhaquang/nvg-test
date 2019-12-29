import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Info from './index';

describe('Test Booking/Info component', () => {
	test('Snapshot info', () => {
		const component = renderer.create(<Info />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	const component = mount(<Info />);
	test('Check info about cinema not empty', () => {
		expect(component.find('.cinema.movie-name')).toBeTruthy();
		expect(component.find('.cinema.movie-detail')).toBeTruthy();
	});

	test('Check info price', () => {
		expect(component.find('.price.total')).not.toBeNaN();
		expect(component.find('.price.currency')).toBeTruthy();
	});
});
