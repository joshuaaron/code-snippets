import { ThunkDispatch, ThunkAction } from 'redux-thunk';
import { Dispatch, AnyAction } from 'redux';
import { IStore } from '../interfaces';

// Helper types 
export type ThunkResult<R> = ThunkAction<R, IStore, any, AnyAction>;
export type ThunkDispatchAlias = ThunkDispatch<IStore, any, AnyAction>;


export interface Action<T extends string> {
	type: T;
}
export interface ActionWithPayload<T extends string, P> extends Action<T> {
	payload: P;
}

// export interface ActionWithPayloadAndError<T extends string, P> extends ActionWithPayload<T, P> {
// 	error: boolean | null | undefined;
// }

export function createAction<T extends string>(type: T): Action<T>;
export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>
export function createAction<T extends string, P>(type: T, payload?: P) {
	return payload === undefined ? { type } : { type, payload }
};

export function createThunkAction<R, T extends string>(type: T): ThunkResult<R>
export function createThunkAction<R, T extends string, P>(type: T, payload: P): ThunkResult<R>
export function createThunkAction<R, T extends string, P>(type: T, payload?: P) {
	return (dispatch: Dispatch) => {
		return payload === undefined ? dispatch({ type }) : dispatch({ type, payload })
	}
}

