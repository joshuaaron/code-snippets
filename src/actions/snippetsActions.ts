import { ISnippet, IStore } from "src/interfaces";
import { createAction, createThunkAction, ThunkResult } from './createAction';
import { ActionsUnion } from './actionsUnion';
import { Dispatch } from 'redux';

export const ADD_SNIPPET = 'ADD_SNIPPET';
export const DELETE_SNIPPET = 'DELETE_SNIPPET';
export const VIEW_ALL = 'VIEW_ALL';
export const CREATE_SNIPPET = 'CREATE_SNIPPET';

export interface CreateSnippet {
	type: typeof CREATE_SNIPPET,
	payload: string;
}

export const Actions = {
	addSnippet: (title: string) => createAction(ADD_SNIPPET, title),
	deleteSnippet: (id: number) => createAction(DELETE_SNIPPET, id),
	viewAll: () => createAction(VIEW_ALL),
}

export const createSnippet = (title: string): ThunkResult<void> => (dispatch: Dispatch) => {
	dispatch({ type: CREATE_SNIPPET, payload: title });
}

// export const createSnippet = (snippet: ISnippet): ThunkResult<void> => {
// 	return (dispatch: Dispatch, getState: () => IStore, { getFirebase, getFirestore }: any) => {
// 		dispatch({
// 			type: 'CREATE_SNIPPET', payload: snippet
// 		})
// 	}
// }

// export const create = createThunkAction<Promise<void>, string>(CREATE_SNIPPET)
export type Actions = ActionsUnion<typeof Actions> | CreateSnippet;

/**
Actions = 
ActionWithPayload<ActionTypes.ADD_SNIPPET, string> | 
ActionWithPayload<ActionTypes.DELETE_SNIPPET, number> |
Action<ActionTypes.VIEW_ALL>

where ActionsUnion = 
<A extends ActionCreatorsMapObject> =
A[keyof A] extends (...args: any[]) => infer R ? R : any

A = typeof Actions = {
	addSnippet: (text: string) => ActionWithPayload<ActionTypes.ADD_SNIPPET, string>;
	deleteSnippet: (id: number) => ActionWithPayload<ActionTypes.DELETE_SNIPPET, number>;
	viewAll: () => Action<ActionTypes.VIEW_ALL>;
}

ReturnType<A[keyof A] = ReturnType<(...args: any[]) => ActionWithPayload<...> =>
A[addSnippet] extends (...args: any[]) => infer R ? R : any;
*/