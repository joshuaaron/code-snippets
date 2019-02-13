import { RouterState } from 'connected-react-router';
import { ISnippet } from './ISnippet';
import { IAuth } from './IAuth';

export interface IStore {
	router: RouterState;
	snippets: ISnippet[];
	auth: IAuth;
}
