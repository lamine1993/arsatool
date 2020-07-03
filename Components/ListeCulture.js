import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  Dimensions,
  FlatList, ImageBackground,
} from "react-native";
import { connect } from 'react-redux'
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton
} from 'react-native-popup-dialog';
import {
    selectCulture,
    selectLocalisation,
    resetCultureAndAttaques,
    unselectLocalisation,
    uiUnshowError,
    uiStopLoading
} from '../Store/actions/actionIndex';
import { Spinner } from 'native-base';
import { _displayError, _displayLoading } from './Authentification/AuthError';
import { getImageFromApi } from '../API/api'
import { Button } from "react-native-elements";
import HeadingText from './UI/HeadingText'
import MainText from './UI/MainText'

class ListeCulture extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
          attaques:[]
      }
  }

    componentDidMount() {
        console.log(this.props.all_attaques)
        console.log(" update home")
    }

    componentWillMount(){
          console.log("culture willmount")
    }

    componentWillUnmount(){
        console.log("culture willunmount")
        //this.props.reset()
        //this.props.navigation.dispatch(resetAction);
        //this.props.reset();
    }

  _goToAttaques(culture, local){
      this.props.navigation.navigate('Attaques',{culture: culture, localisation:local})
  }

  render() {
    return (
        <View style={styles.containerTop}>
        <ImageBackground source={require('../assets/ui_background/Culture.png')} style={styles.containerImage}> 
          <View style={styles.container}>
          <View style={styles.header}>
             <HeadingText style={{textAlignVertical:'center', color: '#fff'}}> 
              Choisir la culture touchée au {this.props.localisation}
            </HeadingText>
             <MainText style={{textAlignVertical:'center',color: '#fff' }}> 
                Cliquer sur la culture
             </MainText>                           
        </View>
        <View style={styles.cultureListe}>
          <FlatList
                data={this.props.cultures}
                
                numColumns={1}
                keyExtractor={(item) => item.image}
                renderItem={({ item }) =>
                  <TouchableHighlight
                    onPress={
                      () => this._goToAttaques(item, this.props.localisation)
                    }
                  >
                    <View style={styles.listItem}>
                        <View style={{flex:1, height:100, flexDirection:'column'}}>
                          <HeadingText style={{flex:2, textAlignVertical:'center',}}> {item.nomCulture} </HeadingText>
                           <MainText style={{flex:1, textAlignVertical:'center',}}> Cliquez ici pour voir les degats sur cette culture</MainText>
                        </View>
                        <Image resizeMode="cover" source={{ uri: getImageFromApi(item.image) }} style={styles.cultureImage} />                        
                    </View>
                  </TouchableHighlight>
                }
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                  console.log("onEndReached")
                }
                }
        />
        </View>
        </View>
        </ImageBackground>
        </View>
    )}

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems:'center'
  },
    header:{
     marginTop:35,
     width:'80%', 
     height: 200,
      backgroundColor: '#000',
      flexDirection: 'column',
      borderColor:'#2EA073',
     },
  cultureListe:{
    width:'90%',
    marginTop:145,
    marginBottom: 30
  },
listItem: {
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    //backgroundColor: "#7DB240",
     backgroundColor: "#eee",
    flexDirection: "row",
    //opacity:0.9,
    borderRadius: 30,

    //alignItems: "center",
    alignContent : 'center',
    //justifyContent:'space-between'
  },
  cultureImage: {
      //marginRight: 8,
      height: 100,
      width: 100,
      //position:'relative',
      borderRadius:50
  },
  header:{
     marginTop:35,
     width:'80%', 
      flex: 1,
      flexDirection: 'column',
      borderColor:'#2EA073',
     },
  containerTop:{
    flex: 1,
    flexDirection: 'column',
    width:'100%'
  },

  containerImage:{
        flex: 1,
        flexDirection:'column',
        resizeMode: "cover",
        justifyContent: "center"
  },
});

const mapStateToProps = state => {
  //console.log(state);
  return {
    customBackgroundDialog: state.recherche.customBackgroundDialog,

    isLoading: state.ui.isLoading,

    error: state.ui.error,
    msg_error: state.ui.message,

    localisation: state.recherche.localisation,
    all_attaques: state.recherche.all_attaques,
    attaques_set:state.recherche.attaques_set,
    cultures: state.recherche.cultures,
    user: state.connexion.user
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onSelectLocalisation: localisation => dispatch(selectLocalisation(localisation)),
    onUnselectLocalisation: () => dispatch(unselectLocalisation()),
    onSelectCulture: (culture, localisation) => dispatch(selectCulture(culture, localisation)),
    reset: () => dispatch(resetCultureAndAttaques()),
    resetError: () => dispatch(uiUnshowError()),
    unloading:()=>dispatch(uiStopLoading())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListeCulture);