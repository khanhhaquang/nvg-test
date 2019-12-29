/* eslint-disable max-len */
import React from 'react';
import Recipe from '@shared/components/recipe';
import Styled from './index.styled';
import { GetRecipeList, DeleteRecipe } from './index.actions';
import { RecipesContext } from '../../index.context';
import { init, remove } from '../../index.actions';

const List = () => {
	const { list, dispatch } = React.useContext(RecipesContext);

	const handleDeleteItem = (id) => {
		DeleteRecipe(`/recipes/${id}`)
			.then((resp) => {
				if (resp.status === 200) {
					remove(dispatch, resp.data);
				}
			})
			.catch((error) => {
				console.log('error: ', error);
			});
	};
	const renderList = () => list?.map((i) => (
		<Recipe
			onDelete={() => handleDeleteItem(i.id)}
			key={i.id}
			title={i.title}
			description={i.description}
		/>
		));

	React.useEffect(() => {
		GetRecipeList(`/recipes?page=${1}`).then((resp) => {
			if (resp.status === 200) {
				init(dispatch, resp.data);
			}
		});
	}, []);

	return (
		<Styled className='list-wrapper'>
			{list?.length === 0 && <h2>Not found</h2>}
			{renderList()}
		</Styled>
	);
};

export default List;
