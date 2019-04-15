import {SET_CULTURES, UNSELECT_LOCALISATION, SELECT_CULTURE, SELECT_ATTAQUE, SET_ATTAQUES} from './actionTypes'
import { uiStartLoading, uiStopLoading } from './actionIndex';


export const selectLocalisation=(localisation)=>{
    
    return dispatch =>{
        dispatch(uiStartLoading());
        fetch('http://10.42.0.1:8080/api/culturesImage')
        .catch((error) => {
            alert("Something went wrong, sorry :/");
            console.log(error);
            dispatch(uiStopLoading());
        })
        .then((res) => res.json())
        .then(parsedRes=>{
            const cultures=[];
            for(let key in parsedRes){
                cultures.push({
                    ...parsedRes[key][0],
                    image: parsedRes[key][1],
                    key: key
                })
            }
            dispatch(setCultures(cultures, localisation));
            dispatch(uiStopLoading());
        })

    }
}

export const setCultures = (cultures, localisation) => {
    return {
        type: SET_CULTURES,
        cultures: cultures,
        localisation:localisation
    };
};

export const selectCulture =(culture, localisation)=>{
    return dispatch =>{
       // dispatch(uiStartLoading());
        fetch('http://10.42.0.1:8080/api/listattaquecomplet/1/FEUILLES')
        .catch((error) => {
            alert("Something went wrong, sorry :/");
            console.log(error);
            //dispatch(uiStopLoading());
        })
        .then((res) => res.json())
        .then(parsedRes=>{
            const all_attaques=[];
            for(let key in parsedRes){
                all_attaques.push({
                    ...parsedRes[key],
                    key: key,
                   
                })
            }
            dispatch(setAttaques(all_attaques));
            //dispatch(uiStopLoading());
        })

    }
}

export const setAttaques = (attaques) => {
    return {
        type: SET_ATTAQUES,
        attaques: attaques,
    };
};

export const selectAttaque= (attaque)=>{
     return {
         type: SELECT_ATTAQUE,
         attaque: attaque
     }
}

export const unselectLocalisation=()=>{
    return {
        type: UNSELECT_LOCALISATION,
        localisation: ""
    }
}
