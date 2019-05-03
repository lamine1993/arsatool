import { UI_START_LOADING, UI_STOP_LOADING, UI_ERROR, UI_ERROR_DEL } from "../actions/actionTypes";

const initialState = {
    isLoading: false,
    error: false,
    message:''
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case UI_START_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case UI_STOP_LOADING:
      return {
        ...state,
        isLoading: false
      };
    case UI_ERROR:
       return{
         ...state,
         error: true,
         message: action.message
       };
    case UI_ERROR_DEL:
       return{
         ...state,
         error: false
       }
    default:
      return state;
  }
};

export default uiReducer;