import {ADD_AGRICULTEUR,ADD_CHERCHEUR, CONNEXION, DECONNEXION} from './actionTypes'
import  {SERVER} from '../../Components/Constants/servers'

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
    fetch(SERVER+'register-bis', {
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
        fetch(SERVER +'users/' +username)
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
