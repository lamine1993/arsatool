import {ADD_AGRICULTEUR,ADD_CHERCHEUR, CONNEXION_AGRICULTURE, CONNEXION_CHERCHEUR} from './actionTypes'

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

export const agriculteurLogin= (login, mdp)=>{
   return {
       type: CONNEXION_AGRICULTURE,
       login: login,
       password:mdp
   }
}

export const chercheurLogin=(login, mdp)=>{
  return {
      type: CONNEXION_CHERCHEUR,
      login: login,
      password:mdp
  }
}
