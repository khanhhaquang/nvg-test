import React from 'react';
import Styled from './index.styled';
import { GetRecipesByFilter } from './index.actions';
import { RecipesContext } from '../../index.context';
import { init } from '../../index.actions';

const Filter = () => {
	const [filter, setFilter] = React.useState('');
	const { dispatch } = React.useContext(RecipesContext);

	const handleChange = (e) => {
		setFilter(e.target.value);
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
