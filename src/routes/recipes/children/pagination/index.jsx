/* eslint-disable react/no-array-index-key */
import React from 'react';
import Styled from './index.styled';
import { RecipesContext } from '../../index.context';
import { changePage } from '../../index.actions';

const Pagination = () => {
	const { currentPage, totalPages, dispatch } = React.useContext(RecipesContext);

	return (
		<Styled className='pagination'>
			{[...Array(totalPages)].map((item, index) => (
				<div
					onClick={() => changePage(dispatch, index + 1)}
					key={index + 1}
					className={`page ${currentPage === index + 1 ? 'active' : ''}`}
				>
					{index + 1}
				</div>
			))}
		</Styled>
	);
};

export default Pagination;
