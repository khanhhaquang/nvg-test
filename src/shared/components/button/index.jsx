import React from 'react';
import PropTypes from 'prop-types';
import Styled from './index.styled';

const Button = (props) => {
	const { children } = props;
	return (
		<Styled className='btn' {...props}>
			{children}
		</Styled>
	);
};

Button.propTypes = {
	children: PropTypes.any,
};

export default Button;
