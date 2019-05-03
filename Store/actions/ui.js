import { UI_START_LOADING, UI_STOP_LOADING, UI_ERROR, UI_ERROR_DEL } from './actionTypes';

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