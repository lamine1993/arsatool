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


export const _displayError=(error, isError, dissmissError)=> {
        return (
          
            
            <Dialog
                dialogTitle={
                  <DialogTitle
                      title="eurreur"
                      hasTitleBar={false}
                      style={{alignItems:'center', justifyContent:'center', height:60}}
                      textStyle={{ color: '#fff'}}
                  />
                }
                backgroundStyle={styles.customBackgroundDialog}
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
export const _displayMSG=(msg, dississError)=> {
    return (


        <Dialog
            dialogTitle={
                <DialogTitle
                    title="eurreur"
                    hasTitleBar={false}
                    style={{alignItems:'center', justifyContent:'center', height:60}}
                    textStyle={{ color: '#fff'}}
                />
            }
            backgroundStyle={styles.customBackgroundDialog}
            footer={[
                <DialogFooter key="button-1">
                    <DialogButton
                        text="CANCEL"
                        onPress={() => dissmissError()}
                    />
                </DialogFooter>,
            ]}
            visible={true}
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


