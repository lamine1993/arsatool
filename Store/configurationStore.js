import { createStore,compose, combineReducers, applyMiddleware  } from 'redux';
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
    const middleware = [thunk];

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(...middleware))
        );
};

export default configureStore;