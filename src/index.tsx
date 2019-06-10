import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import { Global } from '@emotion/core';
import store, { history, rrFirebaseConfig } from './store';
import { routes, IRoute } from './routes';
import Navbar from './components/Nav/Navbar';
import { globalStyles } from './styles/globalStyles';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

const getRoutes = (routes: IRoute[]) => (
	routes.map(route => <Route {...route} key={route.path} />)
);

ReactDOM.render(
	<Provider store={store}>
		<ReactReduxFirebaseProvider {...rrFirebaseConfig}>
			<ConnectedRouter history={history}>
				<>
					<Global styles={globalStyles} />
					<Navbar />
					<Switch>
						{getRoutes(routes)}
					</Switch>
				</>
			</ConnectedRouter>
		</ReactReduxFirebaseProvider>
	</Provider>,
	document.getElementById('root')
);
