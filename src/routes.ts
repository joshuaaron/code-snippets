import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import CreateSnippet from './pages/CreateSnippet';
import CreateNew from './pages/CreateNew';
import AllPosts from './pages/AllPosts';
import SnippetDetails from './components/Snippets/SnippetDetails';
import { RouteComponentProps } from 'react-router-dom';
import Signin from './auth/Signin';
import SignUp from './auth/SignUp';

export interface IRoute {
	path: string;
	component: React.ComponentType<any>;
	exact?: boolean;
}

/** Extend the react-router RouteComponentProps to include the id prop in Params */
interface IRouteParams {
	id: string,
	param2?: string;
}
export interface IRouteProps extends RouteComponentProps<IRouteParams> {};

export const routes: IRoute[] = [
	{
		path: '/',
		exact: true,
		component: Dashboard
	},
	{
		path: '/categories',
		component: Categories
	},
	{
		path: '/create',
		component: CreateNew
	},
	{
		path: '/posts',
		exact: true,
		component: AllPosts
	},
	{
		path: '/posts/:id', 
		component: SnippetDetails
	},
	{
		path: '/signin',
		component: Signin
	},
	{
		path: '/signup',
		component: SignUp
	}
];