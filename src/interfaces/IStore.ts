import { RouterState } from 'connected-react-router';
import { ISnippet } from './ISnippet';
import { IAuth } from './IAuth';
import { Store, AnyAction } from 'redux';
import { FirestoreReducer } from 'react-redux-firebase';

export interface IStore {
	router: RouterState;
	snippets: ISnippet[];
	auth: IAuth;
	firebase: FirestoreReducer.Reducer;
	firestore?: any;
}

let store: Store<IStore>;
export function getStore() {
	return store;
}

export function setStore(newStore: Store<IStore>) {
	store = newStore;
}