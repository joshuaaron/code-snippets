import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebase from '../config/firebase';
import { setStore } from '../interfaces';

export const history = createBrowserHistory();

const initialState = {};
const middleware = [
	thunk.withExtraArgument({
		getFirebase,
		getFirestore
	}),
	routerMiddleware(history) // for dispatching history actions
]

const store = createStore(
	rootReducer(history), // root reducer with router state
	initialState,
	compose(
		composeWithDevTools(applyMiddleware(...middleware)),
		reduxFirestore(firebase), // pass the config object to the store enhancers
		reactReduxFirebase(firebase, {}), // when we use getFirebase/getFirestore in actions it knows our project details amd what to connect to.
	)
);

// instantiate a store object for access to dispatch inside defineAction.
setStore(store);
export default store;