/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import Styled from './index.styled';

const Recipe = (props) => {
	const { title, description, onDelete, ...rest } = props;

	return (
		<Styled className='recipe' {...rest}>
			<span className='title'>{title}</span>
			<span className='description'>{description}</span>

			<button onClick={onDelete} className='delete'>
				Delete
			</button>
		</Styled>
	);
};

export default Recipe;
