// Components/Search.js
import React from 'react'
import {View, TextInput, Icon, Button, FlatList, 
StyleSheet, Dimensions, Text, ActivityIndicator, ImageBackground, ScrollView} from 'react-native'
//import AttaqueItem from './Items/AttaqueItem'
import { selectAttaque, setImagesAttaque } from '../../Store/actions/actionIndex';
import { connect } from 'react-redux'
import { _displayError, _displayMSG } from '../Authentification/AuthError';
import { StackActions, NavigationActions } from 'react-navigation';
import AttaqueItem from '../UI/AttaqueItem'

import {
    selectCulture,
    uiUnshowError,
    uiShowError,
    uiStartLoading,
    resetCultureAndAttaques
} from '../../Store/actions/actionIndex';
import { Spinner } from 'native-base';
import HeadingText from '../UI/HeadingText'
import MainText from '../UI/MainText'

class Attaques extends React.Component {
    constructor(props) {
         super(props)
        this.state = {
            culture: this.props.navigation.state.params.culture,
            local: this.props.navigation.state.params.localisation,
            isAttaqueVide: false
        }
    }
    componentWillMount(){
        console.log("attaque willmount")
        this.makeRemoteRequest();
        //this.props.onSelectCulture(this.props.navigation.state.params.culture, this.props.navigation.state.params.localisation);
    }

    componentWillUnmount(){
        console.log("attaque willunmount")
        /*this.props.reset()
        this.props.navigation.dispatch(resetAction);*/
        //this.props.reset();
    }


    componentWillUpdate(){
        //this.props.onSelectCulture(this.props.navigation.state.params.culture, this.props.navigation.state.params.localisation);
    }


     componentDidMount(){
        console.log("attaque mount")
     }
    

    componentDidUpdate() {
        console.log("attaque update")
        if(this.props.all_attaques.length===0){
          
          //_displayMSG("Les attaque pour cette section sont vide", true, this._dismiss )
        }

    }

    _dismiss=()=>{
        this.setState({
            isAttaqueVide:false
        })

        this.props.navigation.pop()
    }

  onValueChangeType(value) {
 
    }

    _displayFiche = (attaque) => {

        //console.log("l'attaque choisi "+attaque.images['0'].imageUrl)
         this.props.onSelectAttaque(attaque)
        // this.props.navigation.navigate("FilmDetail",{ idFilm: idFilm })

         this.props.navigation.push('FicheTechnique')
 
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

    _viewAttaque(){
        if (!this.props.isLoading && this.props.all_attaques.length > 0) {

            return (
                <FlatList
                    //style={styles.attaques}
                    data={this.props.all_attaques}
                    keyExtractor={(item, index) => index + "attaques" + item.id.toString()}
                    renderItem={({item}) => <AttaqueItem attaque={item} displayFiche={this._displayFiche}/>}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        //console.log("onEndReached")
                    }
                    }
                />
            )
        }else{
            return(
                <View>
                    <Text style={{fontSize:20}}>
                        Les attaques concernant votre choix sont vides pour l'instant
                    </Text>
                </View>
            )
        }
    }

    async makeRemoteRequest() {

             await  this.props.onSelectCulture(this.props.navigation.state.params.culture, this.props.navigation.state.params.localisation);

    }

    render(){
        //this.props.onSelectCulture(this.props.navigation.state.params.culture, this.props.navigation.state.params.localisation);

        return (
            <View style={styles.containerTop}>
                <ImageBackground source={require('../../assets/ui_background/Degats.png')} style={styles.containerImage}> 
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <HeadingText style={{textAlignVertical:'center', color: '#fff'}}> 
                            Liste des Attaques
                            </HeadingText>
                            <MainText style={{textAlignVertical:'center',color: '#fff' }}> 
                                Cliquer sur l'image d'un insecte pour voir les details de sa fiche technique
                            </MainText>                           
                        </View>
                        <View style={styles.attaqueListe}>
                        <ScrollView>
                            {
                               
                                this._viewAttaque()
                                
                            }
                            
                        </ScrollView>
                          
                        </View>
                    </View>
                </ImageBackground>
            </View>

        )
    }
}

const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'DrawerNavigator' })],
});

const styles = StyleSheet.create({
            containerTop:{
            flex: 1,
            flexDirection: 'column',
            width:'100%'
        },
     header:{
     marginTop:35,
     width:'80%', 
     height: 100,
    flexDirection: 'column',
      borderColor:'#2EA073',
     },
     attaqueListe:{
            width:'100%',
            borderRadius: 30,
            backgroundColor: '#fff',
            paddingTop:20,
            paddingHorizontal:20,
            alignItems: 'center',
            marginBottom:150,
        },
        containerImage:{
                flex: 1,
                flexDirection:'column',
                resizeMode: "cover",
                justifyContent: "center"
        },
    container: {
      flex: 1,
        flexDirection: 'column',
        alignItems:'center'
        },
    titre:{
        margin:10,
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        alignItems:'center',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#2EA073',
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:25
        
    },
    attaques:{
      borderTopWidth:1,
      marginBottom:1,
      borderTopColor:'rgba(0,0,0,0.5)'
    },
  });

const mapStateToProps = state => {
  return {
      //attaques: state.recherche.attaques,
      all_attaques: state.recherche.all_attaques,
      //imagesAttaques: state.recherche.imagesAttaques,

      isLoading: state.ui.isLoading,
      error: state.ui.error,
      msg_error: state.ui.message,
  };
};

const mapDispatchToProps = dispatch => {
  return {
       onSelectAttaque : attaque =>dispatch(selectAttaque(attaque)),
    //onsetImagesAttaque: attaques=>dispatch(setImagesAttaque(attaques))
      onSelectCulture: (culture, localisation) => dispatch(selectCulture(culture, localisation)),
      resetError: () => dispatch(uiUnshowError()),
      reset: () => dispatch(resetCultureAndAttaques()),
      loading: ()=>dispatch(uiStartLoading()),
      setError: () => dispatch(uiShowError()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Attaques);