export const init = (dispatch, data) => dispatch({
		type: 'init',
		payload: data,
	});

export const remove = (dispatch, data) => dispatch({
		type: 'remove',
		payload: data,
	});

export const changePage = (dispatch, data) => dispatch({
		type: 'switch',
		payload: data,
	});

export const changeFilter = (dispatch, data) => dispatch({
		type: 'change-filter',
		payload: data,
	});
