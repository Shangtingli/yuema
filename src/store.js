import {createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
store.subscribe(() => {
    const newState = store.getState();
    console.log(newState);
    // check out your updated state
});
export default store;