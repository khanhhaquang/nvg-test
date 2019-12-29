/* eslint-disable react/no-array-index-key */
import React from 'react';
import Styled from './index.styled';
import { RecipesContext } from '../../index.context';
import { init, changePage } from '../../index.actions';
import { GetRecipeList } from '../list/index.actions';

const Pagination = () => {
	const { currentPage, filter, totalPages, dispatch } = React.useContext(RecipesContext);

	const handleChangePage = (page) => {
		GetRecipeList(`/recipes?search=${filter}&page=${page}`).then((resp) => {
			changePage(dispatch, page);
			init(dispatch, resp.data);
		});
	};

	return (
		<Styled className='pagination'>
			{[...Array(totalPages)].map((item, index) => (
				<div
					onClick={() => handleChangePage(index + 1)}
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
