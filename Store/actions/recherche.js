import {SET_CULTURES, UNSELECT_LOCALISATION, SELECT_CULTURE, SELECT_ATTAQUE, SET_ATTAQUES, ADD_IMAGE_ATTAQUE, RESET_CULTURE_ATTAQUES} from './actionTypes'
import { uiStartLoading, uiStopLoading, uiShowError, uiUnshowError } from './actionIndex';

export const selectLocalisation=(localisation)=>{
    
    return dispatch =>{
        dispatch(uiStartLoading());
        fetch('http://10.150.216.126:8080/api/culturesImage')
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
        }).catch((error) => {

                dispatch(uiStopLoading());
                dispatch(uiShowError());
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

export  const  selectCulture =(culture, localisation)=>{
    return dispatch =>{

        var  all_attaques=[]
        fetch('http://10.150.216.126:8080/api/listattaquecomplet/'+culture.id+'/'+localisation)
        .catch((error) => {
            alert("Something went wrong, sorry :/");
            console.log(error);
            dispatch(uiStopLoading());
        })
        .then((res)=>res.json())
        .then(parsedRes=>{
            dispatch(resetCultureAndAttaques())
            for(let key in parsedRes){
                all_attaques.push({
                    ...parsedRes[key],
                    key: key,
                    imagesAttaques:[]
                })
            }
            for(let key in parsedRes) fetch('http://10.150.216.126:8080/api/imageAttaques/' + all_attaques[key].id)
                .then((res) => res.json())
                .then(res => {

                    //var images=res
                    all_attaques[key].imagesAttaques = res

                    fetch('http://10.150.216.126:8080/api/imageInsectes/'+all_attaques[key].insecte.id)
                        .then((res)=>res.json())
                        .then(res=>{
                            all_attaques[key].insecte.insecteImage=res
                            dispatch(setImagesAttaque(all_attaques[key]))
                        })


                    //dispatch(setAttaques(all_attaques))

                })
        })
    }


};

export const resetCultureAndAttaques=()=>{
    return {
        type: RESET_CULTURE_ATTAQUES
    }
}


export const setImagesAttaque = (attaque)=>{
    return {
        type: ADD_IMAGE_ATTAQUE,
        attaque: attaque
    }
};

export const selectAttaque= (attaque)=>{
     return {
         type: SELECT_ATTAQUE,
         attaque: attaque
     }
};

export const unselectLocalisation=()=>{
    return {
        type: UNSELECT_LOCALISATION,
        localisation: ""
    }
}

 