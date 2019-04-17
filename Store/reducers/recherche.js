import {
      SELECT_LOCALISATION,
      UNSELECT_LOCALISATION,
      SELECT_CULTURE,
      SELECT_ATTAQUE,
      SET_CULTURES,
      SET_ATTAQUES,
} from "../actions/actionTypes"
import attaques from '../../Components/Helpers/Insectes'

const initialState = {
    attaques: attaques,
    cultures:null,
    attaque:null,
    all_attaques:null,
    localisation:"",
    customBackgroundDialog: false ,
    imagesAttaques:[]
  };



  const rechercheReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CULTURES:
        return {
           ...state,
           attaques: attaques,
           localisation:action.localisation,
           cultures:action.cultures,
           customBackgroundDialog: true,
        };
      case SET_ATTAQUES:
        return {
           ...state,
           customBackgroundDialog: false,
           attaques: attaques,
           all_attaques:action.attaques,
           
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
      case ADD_IMAGE_ATTAQUE:
        return {
          ...state, 
          imagesAttaques: state.imagesAttaques.concat(action.images),
        };
      default:
        return  state;
    }
  };
  
  export default rechercheReducer;