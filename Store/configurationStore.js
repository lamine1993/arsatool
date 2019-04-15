import { createStore, combineReducers, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import rechercheReducer from './reducers/recherche';
import connexionReducer from './reducers/connexion';
import uiReducer from './reducers/ui';
const rootReducer = combineReducers({
    recherche: rechercheReducer,
    connexion: connexionReducer,
    ui: uiReducer
});

const configureStore = () => {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
        );
};

export default configureStore;