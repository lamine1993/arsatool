import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  ImageBackground,
} from "react-native";
import { connect } from 'react-redux'
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
import HeadingText from './UI/HeadingText'
import MainText from './UI/MainText'


class HomeScreen extends React.Component {
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
          console.log("home willmount")
    }

  _goToAttaques(culture, local){
      this.props.navigation.navigate('Attaques',{culture: culture, localisation:local})
  }


   _goToCulture(local){
      this.props.navigation.navigate('Attaques',{localisation:local})
  }

   _cultureSelected(culture) {
      this.props.onSelectCulture(culture, this.props.localisation);
       _displayError("Attaques innexistantes pour les parametre entrée", this.props.error, this.props.resetError)

       if (this.props.attaques_set===true) {
           console.log(this.props.all_attaques)
           this.props.navigation.navigate('Attaques')
       }
       else _displayError("Attaques innexistantes pour les parametre entrée", true, this.props.resetError)
   }

  _selectLocalisation = localisation => {
    this.props.onSelectLocalisation(localisation);
   if(this.props.cultures){
      console.log(this.props.cultures)
      this.props.navigation.navigate('ListeCulture', {localisation: localisation})
    }
  }


  _unselectLocalisation = () => {
    this.props.onUnselectLocalisation();
  }


  _displayLoading = () => {
    if (this.props.isLoading) {
      return (

        <View>
          <Spinner color='green' />
        </View>
      )
    }
  }

  render() {
    return (
      <View style={styles.containerTop}>
       <ImageBackground source={require('../assets/ui_background/Accueil.png')} style={styles.containerImage}> 
        <View style={styles.container}>

          {_displayLoading("CONNEXION",this.props.isLoading, this.props.unloading)}
          {_displayError(this.props.msg_error, this.props.error, this.props.resetError)}
          <View style={styles.header}>
             <HeadingText style={{textAlignVertical:'center', color: '#fff'}}> Acceuil</HeadingText>
             <MainText style={{textAlignVertical:'center', color: '#fff'}}> 
                Choisir la partie de la culture attaquée
             </MainText>                           
        </View>
          <View style={styles.bouton_partie}>
             <View style={styles.bouton_partie_ligne}>
               <View style={styles.bouton_partie_colonne}>
                  <TouchableHighlight
                    style={styles.fittParent}
                      onPress={() => { this._selectLocalisation("FEUILLES") }}
                    >
                    <Image source={require('../assets/menu-image/Groupe_9.png')} style={styles.fittParent}/>
                      
                  </TouchableHighlight>
               </View>
                 <View style={styles.bouton_partie_colonne}>
                  <TouchableHighlight
                    style={styles.fittParent}
                      onPress={() => { this._selectLocalisation("FRUITS") }}
                    >
                    <Image source={require('../assets/menu-image/Groupe_10.png')} style={styles.fittParent}/>
                      
                  </TouchableHighlight>
               </View>
                </View>
              
              <View style={styles.bouton_partie_ligne}>
                <View style={styles.bouton_partie_colonne}>
                  <TouchableHighlight
                    style={styles.fittParent}
                      onPress={() => { this._selectLocalisation("FLEURS") }}
                    >
                    <Image source={require('../assets/menu-image/Groupe_11.png')} style={styles.fittParent}/>
                      
                  </TouchableHighlight>
                </View>
                <View style={styles.bouton_partie_colonne}>
                  <TouchableHighlight
                    style={styles.fittParent}
                      onPress={() => { this._selectLocalisation("TIGE") }}
                    >
                    <Image source={require('../assets/menu-image/Groupe_12.png')} style={styles.fittParent}/>
                      
                  </TouchableHighlight>
                </View>
                </View>
          </View>
        </View>
      </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent:'center',
    alignItems:'center',
    //backgroundColor:'#fff'
    //marginBottom:100,
  },
  containerTop:{
    flex: 1,
    flexDirection: 'column',
  },

  containerImage:{
        flex: 1,
        flexDirection:'column',
        resizeMode: "cover",
        justifyContent: "center"
  },
   header:{
     marginTop:35,
     width:'80%', 
      flex: 1,
      flexDirection: 'column',
      borderColor:'#2EA073',
     },

  bouton_partie: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent:'center',
    borderColor:'#2EA073'
  },

  bouton_partie_colonne:{
      flex:1,
      alignSelf:'center',
      //width:200,
      //height:150
  },

  fittParent:{
    alignSelf:'center',
    width:'100%',
    //height:'100%'
  },

  bouton_partie_ligne: {
    flex: 1,
    flexDirection: 'row',
    alignSelf:'center',
    justifyContent: 'space-between',
    marginTop: 10,
    borderBottomColor:'#2EA073',
    alignContent:'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  header_attaque: {
    borderTopColor: '#2EA073',
    borderTopWidth: 1,
    marginTop: 7
  },
  imageContainer: {
    //position: 'relative',
   // flex:1,
    //width: undefined,
    //height: undefined
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
    localisationChoisi: state.recherche.localisationChoisi,
    isLoading: state.ui.isLoading,

    error: state.ui.error,
    msg_error: state.ui.message,
    success:state.ui.success,

    localisation: state.recherche.localisation,
    all_attaques: state.recherche.all_attaques,
    attaques_set:state.recherche.attaques_set,
    cultures: state.recherche.cultures,
    user: state.connexion.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectLocalisation: localisation => dispatch(selectLocalisation(localisation)),
    onUnselectLocalisation: () => dispatch(unselectLocalisation()),
    onSelectCulture: (culture, localisation) => dispatch(selectCulture(culture, localisation)),
    reset: () => dispatch(resetCultureAndAttaques()),
    resetError: () => dispatch(uiUnshowError()),
    unloading:()=>dispatch(uiStopLoading()),
    setSuccess: ()=>dispatch(uiSuccess()),
    resetSuccess: ()=>dispatch(uiResetSuccess())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
