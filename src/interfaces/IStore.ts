import { RouterState } from 'connected-react-router';
import { ISnippet } from './ISnippet';
import { IAuth } from './IAuth';
import { Store } from 'redux';

export interface IStore<> {
	router: RouterState;
	snippets: ISnippet[];
	auth: IAuth;
}

let store: Store<IStore>;
export function getStore() {
	return store;
}

export function setStore(newStore: Store<IStore>) {
	store = newStore;
}