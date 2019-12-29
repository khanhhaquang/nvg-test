/* eslint-disable no-mixed-spaces-and-tabs */
export const formatNumber = (
	number = 0,
	places = 2,
	symbol = '$',
	thousand = ',',
	decimal = '.',
) => {
	const negative = number < 0 ? '-' : '';
	const i = `${parseInt(Math.abs(+number).toFixed(places > 0 ? places : 0), 10)}`;
	const j = i.length > 3 ? i.length % 3 : 0;
	return (
		negative
		+ (j ? i.substr(0, j) + thousand : '')
		+ i.substr(j).replace(/(\d{3})(?=\d)/g, `$1${thousand}`)
		+ (places > 0
			? decimal
			  + Math.abs(number - i)
					.toFixed(places)
					.slice(2)
			: '')
		+ symbol
	);
};
