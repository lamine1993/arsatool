import {ADD_AGRICULTEUR,ADD_CHERCHEUR, CONNEXION, DECONNEXION} from './actionTypes'
import  {SERVER} from '../../Components/Constants/servers'
import { uiStartLoading, uiStopLoading, uiShowError, uiUnshowError,  uiResetSuccess, uiSuccess } from './actionIndex';
import RNFetchBlob from 'react-native-fetch-blob'

export const addAgriculture=(user)=>{
return dispatch=> {

    const userData = {
        "email": user.email, 
        "firstName": user.firstname, 
        "lastName": user.lastName, 
        "login": user.login,
        "phone": user.telephone,
        "password": user.password,
    };
    dispatch(uiStartLoading())
    fetch(SERVER+'register-bis', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    }).catch((error)=>{
        dispatch(uiStopLoading())
        dispatch(uiShowError())
    }).then((res) => {
        if (res.status === 404 || res.status === 200) {
            dispatch(uiStopLoading())
            dispatch(uiSuccess())
            dispatch(addAgri(user))
            dispatch(login(user))
            return res
        }
    })
}

}

export const addAgri=(user)=>{
    return {
        type: ADD_AGRICULTEUR,
        agriculteur:user
    }
}

export const addChercheur=(user)=>{
   return {
       type: ADD_CHERCHEUR,
       chercheur: user
   } 
}

export const setUser=(username)=>{

    return dispatch=> {
        //console.log(username)
        fetch(SERVER +'users/' +username)
          .then((res) => {
                if (res.status === 404 || res.status === 200) {
                    return res.json()
                }
            }).then((resPar) => {
            //resPar l'utilisateur retourner
            //console.log(resPar)
             dispatch(uiStopLoading())
             dispatch(uiSuccess())
             dispatch(login(resPar))
        }).catch((error) => {
            dispatch(uiStopLoading())
            dispatch(uiShowError())
            console.log(error)
        })
    }
}

export const envoieImage=(path)=>{
    return dispatch=>{
        const userData = {
            "id": null, //form
            "agriculteurId": 1,
            "urlImage": null,
            "dateValidation": null,
            "dateDAjout": null,
            "flag": true
        };
        dispatch(uiStartLoading())
        RNFetchBlob.fetch('POST', SERVER+'imageEnvoye', {
            // this is required, otherwise it won't be process as a multipart/form-data request
            'Content-Type': 'multipart/form-data',
        }, [
            // append field data from file path
            {
                name: 'file',
                filename: 'avatar.jpg',
                // Change BASE64 encoded data to a file path with prefix `RNFetchBlob-file://`.
                // Or simply wrap the file path with RNFetchBlob.wrap().
                data: RNFetchBlob.wrap(path)
            },
            {
                name: 'agriculteur', data: JSON.stringify({
                "id": null, //form
                "agriculteurId": 1,
                "urlImage": null,
                "dateValidation": null,
                "dateDAjout": null,
                "flag": true
            })
            }
        ]).then((resp) => {
            //console.log("response")
            /* if (resp.respInfo.status === 201) {
                 this.setState({ showPop: true })

                 console.log(this.state.showPop)

                 this._displayMGS("Photo envoyee")
             }*/

            dispatch(uiStopLoading())
            dispatch(uiSuccess())


            //console.log(resp.respInfo.status)
        }).catch((err) => {
            dispatch(uiStopLoading())
            dispatch(uiShowError())
            console.log(err)
        })
    }
}


export const loginAgriculture=(user)=>{
    return dispatch=> {

        //console.log(user)
        const userData = {
            "username": user.telephone,
            "password": user.password,
        };
        //console.log(BASE_URL+'users/'+user.telephone)
        dispatch(uiStartLoading())
        fetch(SERVER+'authenticate',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        })
            .then((res) => {
            if (res.status === 404 || res.status === 200) {
                return res.json()
            }
        }).then((resPar)=>{
            //resPar l'utilisateur retourner
           // console.log(resPar)
            if(resPar.id_token) {
                dispatch(setUser(userData.username))
            }

        }).catch((error)=>{
            dispatch(uiStopLoading())
            dispatch(uiShowError())
            //console.log(error)
        })
    }
}

export const login= (user)=>{
   return {
       type: CONNEXION,
       user:user
   }
}
 
 export const logout=()=>{
    
   return {
       type: DECONNEXION,
   }
 }
