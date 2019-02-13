import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from './authReducer';
import snippets from './snippetReducer';

export default (history: any) => combineReducers({
	router: connectRouter(history),
	auth,
	snippets
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