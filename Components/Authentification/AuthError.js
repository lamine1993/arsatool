import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableHighlight,
    Dimensions,
    FlatList,
    Text
} from "react-native";
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton
} from 'react-native-popup-dialog';
import { Spinner } from 'native-base';

export const _displayError=(error, isError, dissmissError)=> {
        return (
          
            
            <Dialog
                dialogTitle={
                  <DialogTitle
                      title="Erreur Connexion"
                      hasTitleBar={true}
                      style={{alignItems:'center', justifyContent:'center', height:50, backgroundColor:'#f00'}}
                      textStyle={{ color: '#fff'}}
                  />
                }
                backgroundStyle={{backgroundColor: '#f00'}}
                footer={[
                  <DialogFooter key="button-1">
                    <DialogButton
                      text="CANCEL"
                      onPress={() => dissmissError()}
                    />
                  </DialogFooter>,
                ]}
                visible={isError}
            >
              <DialogContent>
                 <Text>{error}</Text>
              </DialogContent>
            </Dialog>
         
      );
  }

export const _displayLoading=(visible, dissmissError)=> {
    return (


        <Dialog
            backgroundStyle={{backgroundColor: '#f00', width:'100'}}

            visible={visible}
        >
            <DialogContent>
                <View>
                    <Text>CONNEXION...</Text>
                    <Spinner color='green' />
                </View>
            </DialogContent>
        </Dialog>

    );
}


export const _displayMSG=(msg,isError, dississError)=> {
    return (


        <Dialog
            dialogTitle={
                <DialogTitle
                    title="Erreur Connexion"
                    hasTitleBar={false}
                    style={{alignItems:'center', justifyContent:'center', height:50}}
                    textStyle={{ color: '#fff'}}
                />
            }
            backgroundStyle={{backgroundColor: '#f00'}}
            footer={[
                <DialogFooter key="button-1">
                    <DialogButton
                        text="CANCEL"
                        onPress={() => dissmissError()}
                    />
                </DialogFooter>,
            ]}
            visible={isError}
        >
            <DialogContent>
                <Text>{msg}</Text>
            </DialogContent>
        </Dialog>

    );
}
  const styles = StyleSheet.create({
    text:{
      fontSize: 15,
      color:'red',
      alignItems:'center',
      justifyContent:'center'
    },
    customBackgroundDialog: {
      backgroundColor: '#f00',
    }
    
  });


