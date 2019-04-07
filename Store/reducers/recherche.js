import {
      SELECT_LOCALISATION,
      UNSELECT_LOCALISATION,
      SELECT_CULTURE,
      SELECT_ATTAQUE
} from "../actions/actionTypes"
import attaques from '../../Components/Helpers/Insectes'

const initialState = {
    attaques: attaques,
    culture:null,
    attaque:null,
    localisation:"",
    isLoading: false,
    customBackgroundDialog: false 
  };

  const rechercheReducer = (state = initialState, action) => {
    switch (action.type) {
      case SELECT_LOCALISATION:
        return {
           ...state,
           attaques: attaques,
           localisation:action.localisation,
           customBackgroundDialog: true,
        };
      case SELECT_CULTURE:
        return {
          ...state,
          culture:action.culture,
          customBackgroundDialog: false,
          
        };
      case SELECT_ATTAQUE:
        return {
          ...state,
          attaque:action.attaque
        };
      case UNSELECT_LOCALISATION:
        return {
          ...state, 
          customBackgroundDialog: false,
        };
      default:
        return  state;
    }
  };
  
  export default rechercheReducer;