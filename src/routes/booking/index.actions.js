export const add = (dispatch, data) => dispatch({
		type: 'add',
		payload: data,
	});

export const remove = (dispatch, data) => dispatch({
		type: 'remove',
		payload: data,
	});
