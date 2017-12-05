import {createStore, combineReducers} from 'redux';
import imagesReducer from '../reducers/images';
import filtersReducer from '../reducers/filters';

export default () => {
    const store = createStore(
        combineReducers({
            images: imagesReducer,
            filters: filtersReducer
        })
    );
return store;     
};


