import { Reducer, combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './authReducer';
import snippets from './snippetReducer';
import snippetsTest from './snippetsTestReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseStateReducer as firebase } from "react-redux-firebase";

export default (history: any) => combineReducers({
	router: connectRouter(history),
	auth,
	snippets,
	snippetsTest,
	firebase,
	firestore: firestoreReducer,
})

/**
 * group by categories/langs (color code on FE)
 * - javascript
 * - typescript
 * - react
 * - redux
 * - css
 * - react-native
 * - node
 * - libs
 * - windowApis
 */