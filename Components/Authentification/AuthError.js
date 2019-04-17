import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Dimensions,
  FlatList,
} from "react-native";
import { connect } from 'react-redux'
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-popup-dialog';
import {
  selectCulture,  
  selectLocalisation, 
  unselectLocalisation
} from '../../Store/actions/actionIndex';
import {Spinner } from 'native-base';




class AuthError extends React.Component {
  constructor(props){
    super(props)
    
  }

    _displayLoading=()=> {
        return (
          
            
            <Dialog
              visible={this.props.error}
              footer={
                <DialogFooter>
                  <DialogButton
                    text="CANCEL"
                    onPress={() => {}}
                  />
                  <DialogButton
                    text="OK"
                    onPress={() => {}}
                  />
                </DialogFooter>
              }
            >
              <DialogContent>
                 <Text>{this.prop.error}</Text>
              </DialogContent>
            </Dialog>
         
      );
  }

  render() {
    return (
        <View style={styles.container}>
          {this._displayLoading}
        </View>
    );
  }
}

  const styles = StyleSheet.create({
    container:{
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      backgroundColor:'#f00'
    },
    bouton_partie:{
      flex: 2,
      flexDirection: 'column',
      justifyContent: 'space-around',
     
    },
    priview_culture:{
      flex: 1,
      flexDirection: 'row',
    },
    bouton_partie_ligne:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop:5
    },
    bouton_partie_ligne_bouton:{

    },
    bouton_partie_ligne_pub:{
      flex: 2,
    },
    bouton_partie_ligne_bouton_title:{
      position: 'absolute',
       top: 0, 
       left: 0, 
       right: 0, 
       bottom: 0, 
       alignItems: 'center'
      },
    icon: {
      width: 24,
      height: 24,
    },
    header_attaque:{
      borderTopColor: '#2EA073',
      borderTopWidth:1,
      marginTop:7
    },
    image_culture:{
      //borderColor: '#2EA073',
      borderRadius: 10,
      borderWidth: 1,
      width:125,
      height:125,
      margin: 4
    },
    text:{
      fontSize: 15,
      color:'red',
      alignItems:'center',
      justifyContent:'center'
    },
    imageContainer:{
      width:100,
      height:100,
      position:'relative',
      borderRadius: 50
    },
    dialogContentView: {
       flex: 1,
      
      // backgroundColor: '#000',
      // opacity: 0.4,
       alignItems: 'center',
       justifyContent: 'center',
    },
    navigationBar: {
      borderBottomColor: '#b5b5b5',
      borderBottomWidth: 0.5,
      backgroundColor: '#ffffff',
    },
    navigationTitle: {
      padding: 10,
    },
    navigationButton: {
      padding: 10,
    },
    navigationLeftButton: {
      paddingLeft: 20,
      paddingRight: 40,
    },
    navigator: {
      flex: 1,
      // backgroundColor: '#000000',
    },
    customBackgroundDialog: {
      opacity: 1,
      backgroundColor: '#000',
    }
    
  });

  const mapStateToProps = state => {
    //console.log(state);
    return {
      customBackgroundDialog: state.recherche.customBackgroundDialog,
      isLoading: state.ui.isLoading,
      error: state.ui.error,
      attaques: state.recherche.attaques,
      localisation: state.recherche.localisation,
      all_attaques: state.recherche.all_attaques,
      cultures:state.recherche.cultures
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      onSelectLocalisation: localisation =>  dispatch(selectLocalisation(localisation)),
      onUnselectLocalisation: ()=>dispatch(unselectLocalisation()),
      onSelectCulture : (culture, localisation) =>dispatch(selectCulture(culture, localisation))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(AuthError);
