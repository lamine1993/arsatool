import {SET_CULTURES, UNSELECT_LOCALISATION, SELECT_CULTURE, SELECT_ATTAQUE, SET_ATTAQUES, ADD_IMAGE_ATTAQUE, RESET_CULTURE_ATTAQUES} from './actionTypes'
import { uiStartLoading, uiStopLoading, uiShowError, uiUnshowError } from './actionIndex';
import  {SERVER} from '../../Components/Constants/servers'
//import {fetch} from "react-native";

all_attaques=[]
attaques=[]
export const selectLocalisation=(localisation)=>{
    
    return dispatch =>{
        //dispatch(resetCultureAndAttaques())
        dispatch(uiStartLoading());
        //console.log(SERVER)
        fetch(SERVER+'culturesImage')
        .then((res) => res.json())
        .then(parsedRes=>{
            const cultures=[];
            //console.log(parsedRes)
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
                console.log(error)
                dispatch(uiStopLoading());
                dispatch(uiShowError("Lecture Des cultures echouer. Veiller verifier votre cconnection"));
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

 export   const  selectCulture =(culture, localisation)=>{
    return dispatch =>{
        all_attaques=[]
        attaques=[]
        //dispatch(resetCultureAndAttaques())
        fetch(SERVER+'listattaquecomplet/'+culture.id+'/'+localisation)
        .catch((error) => {
            //alert("Something went wrong, sorry :/");
            dispatch(uiShowError("connexion echouer"))
            console.log(error);
            //dispatch(uiStopLoading());
        })
        .then((res)=>{
            if (res.status === 404 || res.status === 200 ) {
                 return res.json()
            }
        })
        .then(parsedRes=>{
            console.log("loading attaques.......")
            for(let key in parsedRes){
                all_attaques.push({
                    ...parsedRes[key],
                    key: key,
                    imagesAttaques:[],
                    images:[]
                })
            }
             attaques=all_attaques
            Promise.all(
                attaques.map(
                    element => fetch(SERVER+'imageAttaques/' + element.id)
                        .then(res => res.json())
                )
            ).then(datas=>{
                    console.log(datas)
                    Promise.all(
                        attaques.map(
                            element => fetch(SERVER+'imageInsectes/'+element.insecte.id)
                                .then(res => res.json())
                        )
                    ).then(data=>{
                            all_attaques.forEach((element, i)=>{
                                all_attaques[element.key].imagesAttaques=datas[i]
                                all_attaques[element.key].images=data[i]
                            })

                            dispatch(setAttaques(all_attaques))
                            console.log("end loading");
                            //dispatch(uiStopLoading());
                        }
                    )}
            )
        })

    }
};


export const setAttaques=(attaques)=>{
    return {
        type: SET_ATTAQUES,
        attaques:attaques
    }
}

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

 