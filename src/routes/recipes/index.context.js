import React from 'react';
import PropTypes from 'prop-types';

const initialState = {
	list: [],
	filter: '',
	currentPage: 1,
	totalPages: 1,
};

const reducer = (state, { type, payload }) => {
	switch (type) {
		case 'init':
			return {
				...state,
				list: [...payload.recipes],
				totalPages: payload.totalPages,
				currentPage: payload.currentPage !== state.currentPage ? 1 : state.currentPage,
			};
		case 'remove':
			return {
				...state,
				list: state.list.filter((i) => i.id !== payload.id),
			};
		case 'change-page':
			return {
				...state,
				currentPage: payload,
			};
		case 'change-filter':
			return {
				...state,
				filter: payload,
			};
		default:
			return state;
	}
};

export const RecipesContext = React.createContext({});

export const RecipesProvider = ({ children }) => {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	return (
		<RecipesContext.Provider value={{ ...state, dispatch }}>{children}</RecipesContext.Provider>
	);
};

RecipesProvider.propTypes = {
	children: PropTypes.any,
};
