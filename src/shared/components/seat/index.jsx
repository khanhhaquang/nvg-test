import React from 'react';
import PropTypes from 'prop-types';
import Styled from './index.styled';

const Seat = (props) => {
	const { type, number, ...rest } = props;

	return (
		<Styled className={`seat ${type}`} {...rest}>
			<span>{number}</span>
		</Styled>
	);
};

Seat.propTypes = {
	type: PropTypes.string,
	number: PropTypes.number,
};

Seat.defaultProps = {
	type: '',
	number: 0,
};

export default Seat;
