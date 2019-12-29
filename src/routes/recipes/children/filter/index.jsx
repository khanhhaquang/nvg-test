import React from 'react';
import Styled from './index.styled';
import { GetRecipesByFilter } from './index.actions';
import { RecipesContext } from '../../index.context';
import { init, changeFilter } from '../../index.actions';

const Filter = () => {
	const { dispatch, filter } = React.useContext(RecipesContext);

	const handleChange = (e) => {
		changeFilter(dispatch, e.target.value);
	};

	const handleSubmit = () => {
		GetRecipesByFilter(`/recipes?search=${filter.trim()}`).then((resp) => {
			init(dispatch, resp.data);
		});
	};
	return (
		<Styled className='filter'>
			<input placeholder='Filter' value={filter} onChange={handleChange} />
			<button onClick={handleSubmit} className='submit'>
				{filter ? 'Submit' : 'Reload'}
			</button>
		</Styled>
	);
};

export default Filter;
