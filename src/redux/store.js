import {createStore, combineReducers, applyMiddleware} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import reducer from '../redux/items/itemsReducer';
import thunk from 'redux-thunk';

// const reducer = combineReducers({
//     characters: itemsReducer,
// });


// const store = createStore(reducer, initialState, devToolsEnhancer(app));

const store = createStore(reducer, applyMiddleware(thunk));

export default store;