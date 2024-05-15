import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import { createHashHistory } from 'history';
import { categoryApi } from '../gateways/CategoryApi';

const history = createHashHistory();
const deps = { history, categoryApi };
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(deps))));

export { store, history };
