import * as snippetActions from 'src/actions/snippetsActions';

const initState = [
	{id: 1, title: 'Title 1'},
	{id: 2, title: 'Title 2'},
	{id: 3, title: 'Title 3'},
];

const snippetReducer = (state = initState, action: snippetActions.Actions) => {
	const newId = state.length + 1;
	switch(action.type) {
		case snippetActions.ADD_SNIPPET:
			return [
				...state,
				{id: newId, title: `Title ${newId}`}
			];
		case snippetActions.CREATE_SNIPPET:
			return [
				...state,
				{id: newId, title: action.payload}
			]
		case snippetActions.DELETE_SNIPPET:
			return [
				...state.slice(0, action.payload),
				...state.slice(action.payload + 1)
			]
		default:
			return state;
	}
}

export default snippetReducer;