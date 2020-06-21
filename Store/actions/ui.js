import { UI_START_LOADING, UI_STOP_LOADING, UI_ERROR, UI_ERROR_DEL, UI_SUCCESS, UI_RESET_SUCCESS } from './actionTypes';

export const uiStartLoading = () => {
    return {
        type: UI_START_LOADING
    };
};

export const uiStopLoading = () => {
    return {
        type: UI_STOP_LOADING
    };
};

export const uiShowError = (msg) => {
        return {
            type: UI_ERROR,
            message:msg
        };
    };
    
export const uiUnshowError = () => {
        return {
            type: UI_ERROR_DEL
        };
};

export  const uiSuccess=()=>{
    return {
        type: UI_SUCCESS
    }
}
export  const uiResetSuccess=()=>{
    return {
        type: UI_RESET_SUCCESS
    }
}