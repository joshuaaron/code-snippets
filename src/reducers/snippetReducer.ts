import ReducerSwitch from '../helpers/reducerSwitch';
import { addSnippet, deleteSnippet } from '../actions/snippetsActions';
import { ISnippet } from '../interfaces';

const initState = [
	{id: '1', title: 'Title 1'},
	{id: '2', title: 'Title 2'},
	{id: '3', title: 'Title 3'},
];

const reducer = new ReducerSwitch<ISnippet[]>();

reducer.caseAction({
	action: addSnippet,
	handler: (state, payload) => {
		const { id, title } = payload;
		return [
			...state,
			{
				id,
				title,
			}
		]
	}
});

reducer.caseAction({
	action: deleteSnippet,
	handler: (state, payload) => {
		return state.filter(snippet => snippet.id !== payload.id);
	}
})

export default reducer.getReducerFunction(initState);