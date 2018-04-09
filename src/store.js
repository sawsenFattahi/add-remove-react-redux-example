import { createStore } from 'redux';
import list from './reducers';
export const store = createStore(
    list,
);