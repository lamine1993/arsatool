import {ADD_AGRICULTEUR, ADD_CHERCHEUR, CONNEXION_AGRICULTURE, CONNEXION_CHERCHEUR} from './actionTypes'
const initialState = {
   
  };

  const connexionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_AGRICULTEUR:
            return {
            ...state,
            };
        case ADD_CHERCHEUR:
            return {
            ...state,
            };
        case CONNEXION_AGRICULTURE:
            return {
            ...state,
            };
        case CONNEXION_CHERCHEUR:
            return {
            ...state,
            };
        default:
        return  state;
    }
  }

export default connexionReducer;