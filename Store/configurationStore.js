import { createStore, combineReducers, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import rechercheReducer from './reducers/recherche';

const rootReducer = combineReducers({
    recherche: rechercheReducer
});

const configureStore = () => {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
        );
};

export default configureStore;