import {ADD_AGRICULTEUR,ADD_CHERCHEUR, CONNEXION, DECONNEXION} from './actionTypes'

const BASE_URL="http://10.150.220.196:8080/api/register-bis"

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
    fetch(BASE_URL, {
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

export const loginAgriculture=(user)=>{
    return dispatch=> {

        //console.log(user)
        const userData = {
            "login": user.login,
            "password": user.password,
        };
        fetch(BASE_URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        }).then((res) => {
            if (res.status === 404 || res.status === 200) {
                return res.json()
            }
        }).then((resPar)=>{
            //resPar l'utilisateur retourner

            dispatch(login(resPar))
        }).catch((error)=>{

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
