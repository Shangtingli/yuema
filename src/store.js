import {createStore } from 'redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);
store.subscribe(() => {
    const newState = store.getState();
    console.log(newState);
});
export default store;