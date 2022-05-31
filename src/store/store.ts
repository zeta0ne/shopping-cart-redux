import {legacy_createStore as createStore, combineReducers} from 'redux';
import { CartPageState, itemListReducer } from './reducers/itemList.reducer';

export interface AppState{
     cartPageState: CartPageState;
}

const rootReducer = combineReducers<AppState>({
     cartPageState: itemListReducer,
})

export const store = createStore(rootReducer)

