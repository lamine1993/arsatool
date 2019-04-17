import {SET_CULTURES, UNSELECT_LOCALISATION, SELECT_CULTURE, SELECT_ATTAQUE, SET_ATTAQUES} from './actionTypes'
import { uiStartLoading, uiStopLoading, uiShowError, uiUnshowError } from './actionIndex';
import {getImageAttaques} from '../../API/api'
var  all_attaques=[]

export const selectLocalisation=(localisation)=>{
    
    return dispatch =>{
        dispatch(uiStartLoading());
        fetch('http://10.150.216.126:8080/api/culturesImage')
        .catch((error) => {
            
            dispatch(uiStopLoading());
            dispatch(uiShowError());
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

export  const  selectCulture =(culture, localisation)=>{
    return dispatch =>{

        var  all_attaques=[]
        var attaque={}
         fetch('http://10.150.216.126:8080/api/listattaquecomplet/'+culture.id+'/'+localisation)
        .catch((error) => {
            alert("Something went wrong, sorry :/");
            console.log(error);
            //dispatch(uiStopLoading());
        })
        .then((res)=>res.json())
        .then(parsedRes=>{
            for(let key in parsedRes){
                all_attaques.push({
                    ...parsedRes[key],
                    key: key,
                    imagesAttaques:[]
                })
            }
            dispatch(setAttaques(all_attaques))
            for(let key in parsedRes){
                fetch('http://10.150.216.126:8080/api/imageAttaques/'+all_attaques[key].id)
                .then((res)=>res.json())
                .then(res=>{
                    
                    var images=res 
                    dispatch(setImagesAttaques(images))
                            //all_attaques[key].imagesAttaques=res
                             //dispatch(setAttaques(all_attaques))
                    
                })
             }

             //console.log(all_attaques['0']);
        })
    }
    

}

export const setAttaques = (attaques) => {
    return {
        type: SET_ATTAQUES,
        attaques: attaques,
    };
};

export const setImagesAttaques=(images)=>{
    return {
        type: ADD_IMAGE_ATTAQUE,
        images: images
    }
}



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

 