import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

// import reducer from './store/reducer';
import issuesReducer from './store/issues_reducer';
import issueObj from './store/individual_issue_reducer';


const rootReducer = combineReducers({
	issuesList : issuesReducer,
	issueObj: issueObj
});


const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
