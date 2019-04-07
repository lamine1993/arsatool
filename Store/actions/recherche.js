import {SELECT_LOCALISATION, UNSELECT_LOCALISATION, SELECT_CULTURE, SELECT_ATTAQUE} from './actionTypes'

export const selectLocalisation=(localisation)=>{
      return {
          type: SELECT_LOCALISATION,
          localisation:localisation
      }
}

export const selectCulture =(culture)=>{
     return {
         type: SELECT_CULTURE,
         culture: culture
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
