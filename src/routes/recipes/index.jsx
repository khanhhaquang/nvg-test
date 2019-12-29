import React from 'react';
import Styled from './index.styled';
import Header from './children/header';
import List from './children/list';
import Filter from './children/filter';
import Pagination from './children/pagination';
import { RecipesProvider } from './index.context';

const Recipes = () => (
	<RecipesProvider>
		<Styled>
			<Header />
			<Filter />
			<List />
			<Pagination />
		</Styled>
	</RecipesProvider>
);

export default Recipes;
