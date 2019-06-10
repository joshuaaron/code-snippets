import { createStore, applyMiddleware, compose, Store, AnyAction } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createFirestoreInstance, getFirestore } from 'redux-firestore';
import firebase from '../config/firebase';
import { setStore, IStore } from '../interfaces';

export const history = createBrowserHistory();

const initialState = {};
const middleware = [
	thunk,
	routerMiddleware(history) // for dispatching history actions
]

const store = createStore(
	rootReducer(history), // root reducer with router state
	initialState,
	compose(
		composeWithDevTools(applyMiddleware(...middleware)),
	)
);

export const rrFirebaseConfig = {
	firebase,
	config: {},
	dispatch: store.dispatch,
	createFirestoreInstance,
}

// instantiate a store object for access to dispatch inside defineAction.
setStore(store);
export default store;

// when we apply middleware, it returns a store enhances, and we can add multiple of them to a project
// applyMiddleware is the first store enhancer,
// then we will add reduxFirestore, taking our config - so it knows what project to connect to
// and reactReduxFirebase - allows getFirevase/getFirestore in our actions