import {legacy_createStore as createStore, combineReducers} from 'redux';
import { itemListReducer } from './reducers/itemList.reducer';

const rootReducer = combineReducers({
     itemListReducer //в начале их было три...
})

export const store = createStore(rootReducer)

