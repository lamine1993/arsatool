import { Platform } from 'react-native';
import RNFS from  'react-native-fs'

export const dirHome = Platform.select({
    //ios: RNFS.DocumentDirectoryPath+'/ArSatool',
    android: RNFS.ExternalStorageDirectoryPath+'/ArSatool'
});

export const dirPicutures = dirHome+'/Pictures';
//export const dirAudio = dirHome+'/Audio';