import React from 'react';
import PropTypes from 'prop-types';
import Styled from './index.styled';

const Item = (props) => {
	const { type, content } = props;

	return (
		<Styled className='item'>
			<span className={`pre ${type}`} />
			<span className='content'>{content}</span>
		</Styled>
	);
};

Item.propTypes = {
	type: PropTypes.string,
	content: PropTypes.string,
};

export default Item;
