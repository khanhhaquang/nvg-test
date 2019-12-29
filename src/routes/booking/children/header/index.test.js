import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Header from './index';

describe('Test Booking/Header component', () => {
	test('Snapshot header', () => {
		const component = renderer.create(<Header />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});

	test('Check header content not empty', () => {
		const component = shallow(<Header />);
		expect(component.find('.movie-name')).toBeTruthy();
		expect(component.find('.movie-detail')).toBeTruthy();
	});
});
