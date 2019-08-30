// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


import React from "react";
import { shallow, configure } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import App from './App';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import issuesReducer from './store/issues_reducer';
import issueObj from './store/individual_issue_reducer';


const rootReducer = combineReducers({
	issuesList : issuesReducer,
	issueObj: issueObj
});


const store = createStore(rootReducer, applyMiddleware(thunk));

configure({ adapter: new EnzymeAdapter() });


// const mockStore = configureMockStore();

// const store = mockStore({
// 	issuesList : [],
// 	issueObj: {}
// });

describe("Testpage Component", () => {
    it("should render without throwing an error", () => {
        expect(
            shallow(
                <Provider store={store}>
                    <App />
                </Provider>
            ).exists(<h1>Test page</h1>)
        ).toBe(false);
    });
});
