// import mockAxios from "axios";
// import configureMockStore from "redux-mock-store";
// import thunk from "redux-thunk";
// import promiseMiddleware from "redux-promise-middleware";
// import { getAllIssues } from "./store/actions/actions";

// const mockStore = configureMockStore([thunk, promiseMiddleware()]);


// describe("getIssues action creator", () => {

// 	let store;

// 	  beforeEach(() => {
// 	    store = mockStore({
// 	      issuesList: []
// 	    });
// 	  });

//   it("dispatches ISSUES_LIST action and returns data on success", async () => {
//     mockAxios.get.mockImplementationOnce(() =>
//       Promise.resolve({
//         data: [{ id: 1, name: "Vasilis" }]
//       })
//     );

//     await store.dispatch(getAllIssues());
//     const actions = store.getActions();
//     // [ { type: "GET_USERS_PENDING" },
//     //   { type: "GET_USERS_FULFILLED", payload: { data: [Array] } } 
//     // ]

//     expect.assertions(1);
//     expect(actions[0].type).toEqual("ISSUES_LIST");
//   });
// });


import moxios from 'moxios';
import { getAllIssues } from './store/actions/actions';

import ReduxThunk from 'redux-thunk';

import {createStore, combineReducers, applyMiddleware} from 'redux';

import issuesReducer from './store/issues_reducer';
import issueObj from './store/individual_issue_reducer';



const rootReducer = combineReducers({
	issuesList : issuesReducer,
	issueObj: issueObj
});


const middlewares = [ReduxThunk];

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

// const store = createStoreWithMiddleware(rootReducer);

const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
}


describe('fetchPosts action', () => {

    beforeEach(() => {
        //moxios.install();
    });

    afterEach(() => {
        // moxios.uninstall();
    });

    test('Store is updated correctly', () => {
    	moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: []
            })
        });

        return store.dispatch(getAllIssues())
        .then(() => {
            const newState = store.getState();
            expect(newState.posts).toBe([]);
        })

		        
    });

});