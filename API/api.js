//const BASE_URL="http://10.150.229.139:9000/api"
import  {SERVER} from '../Components/Constants/servers'


export function getImageFromApi(imagePath){
  return SERVER+'imagesRessource/'+imagePath
}



