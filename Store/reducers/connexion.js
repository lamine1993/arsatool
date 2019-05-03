import {ADD_AGRICULTEUR, ADD_CHERCHEUR, CONNEXION, DECONNEXION} from '../actions/actionTypes'

const initialState = {
     session:false,
     user:null,
};

  const connexionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_AGRICULTEUR:
            return {
            ...state,
            user:action.agriculteur,
            session:true
            };
        case ADD_CHERCHEUR:
            return {
            ...state,
            user:action.user,
            session:true
            };
        case CONNEXION:
            return {
            ...state,
            user:action.user,
            session:true
            };
        case DECONNEXION:
            return {
            ...state,
            user:null,
            session:false
            };
        default:
          return  state;
    }
  }

export default connexionReducer;