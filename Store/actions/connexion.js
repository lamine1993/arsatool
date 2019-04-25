import {ADD_AGRICULTEUR,ADD_CHERCHEUR, CONNEXION, DECONNEXION} from './actionTypes'
//import {fetch} from "react-native";

const BASE_URL="http://10.42.0.1:8080/api/"

export const addAgriculture=(user)=>{
return dispatch=> {

    //console.log(user)
    const userData = {
        "email": user.email, //form
        "firstName": user.firstname, //form
        "lastName": user.lastName, //form
        "login": user.login,
        "phone": user.telephone,
        "password": user.password,
    };
    fetch(BASE_URL+'register-bis', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    }).catch((error)=>{

    }).then((res) => {
        if (res.status === 404 || res.status === 200) {
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
        fetch(BASE_URL +'users/' +username)
          .then((res) => {
                if (res.status === 404 || res.status === 200) {
                    return res.json()
                }
            }).then((resPar) => {
            //resPar l'utilisateur retourner
            //console.log(resPar)
             dispatch(login(resPar))
        }).catch((error) => {
            console.log(error)
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
        fetch(BASE_URL+'authenticate',{
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
            console.log(resPar)
            if(resPar.id_token) dispatch(setUser(userData.username))

        }).catch((error)=>{
            console.log(error)
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
