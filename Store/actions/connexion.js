import {ADD_AGRICULTEUR,ADD_CHERCHEUR, CONNEXION, DECONNEXION} from './actionTypes'

export const addAgriculture=(user)=>{
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
