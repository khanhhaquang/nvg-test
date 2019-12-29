import { formatNumber } from './index';

describe('Test helper functions', () => {
	describe.each([
		[0, 1, '', '0.0'],
		[190000, 0, '$', '190,000$'],
		[-100, 0, 'abc', '-100abc'],
		[999999, -1, '', '999,999'],
	])('Test formatNumber', (num, places, symbol, result) => {
		test(`returns ${result}`, () => {
			expect(formatNumber(num, places, symbol)).toBe(result);
		});
	});
});
