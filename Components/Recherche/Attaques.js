// Components/Search.js
import React from 'react'
import {View, TextInput, Icon, Button, FlatList, StyleSheet, Dimensions, Text, ActivityIndicator, ImageBackground} from 'react-native'
import AttaqueItem from './Items/AttaqueItem'
import { selectAttaque, setImagesAttaque } from '../../Store/actions/actionIndex';
import { connect } from 'react-redux'
import { _displayError } from '../Authentification/AuthError';
import { StackActions, NavigationActions } from 'react-navigation';
import {
    selectCulture,
    uiUnshowError,
    uiStartLoading,
    resetCultureAndAttaques
} from '../../Store/actions/actionIndex';
import { Spinner } from 'native-base';

class Attaques extends React.Component {
    constructor(props) {
         super(props)
        this.state = {
            culture: this.props.navigation.state.params.culture,
            local: this.props.navigation.state.params.localisation
        }
    }
    componentWillMount(){
        console.log("attaque willmount")
        this.makeRemoteRequest();
        //this.props.onSelectCulture(this.props.navigation.state.params.culture, this.props.navigation.state.params.localisation);
    }

    componentWillUnmount(){
        console.log("attaque willunmount")
        this.props.reset()
        this.props.navigation.dispatch(resetAction);
        //this.props.reset();
    }


    componentWillUpdate(){
        //this.props.onSelectCulture(this.props.navigation.state.params.culture, this.props.navigation.state.params.localisation);
    }


     componentDidMount(){
        console.log("attaque mount")
         //this.props.onSelectCulture(this.state.culture, this.state.local);
     }
    

    componentDidUpdate() {
        console.log("attaque update")

    }

  onValueChangeType(value) {
 
    }

    _displayFiche = (attaque) => {
         //this.props.onSelectAttaque(attaque)
        // this.props.navigation.navigate("FilmDetail",{ idFilm: idFilm })
         this.props.navigation.push('FicheTechnique', {attaque:attaque})
 
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
        }
    }

    async makeRemoteRequest() {

             await  this.props.onSelectCulture(this.props.navigation.state.params.culture, this.props.navigation.state.params.localisation);

    }

    render(){
        //this.props.onSelectCulture(this.props.navigation.state.params.culture, this.props.navigation.state.params.localisation);

        return (

            <View style={styles.container}>
                {this._displayLoading()}
                <View style={{width:Dimensions.get('window').width, height:1, backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
                
                </View>
                {this._viewAttaque()}
            </View>

        )
    }
}

const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'DrawerNavigator' })],
});

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor:'#fff',
      width: Dimensions.get('window').width,
    },
    titre:{
        margin:10,
        justifyContent: 'center',
        width: Dimensions.get('window').width-50,
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
    }
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
    //onSelectAttaque : attaque =>dispatch(selectAttaque(attaque)),
    //onsetImagesAttaque: attaques=>dispatch(setImagesAttaque(attaques))
      onSelectCulture: (culture, localisation) => dispatch(selectCulture(culture, localisation)),
      resetError: () => dispatch(uiUnshowError()),
      reset: () => dispatch(resetCultureAndAttaques()),
      loading: ()=>dispatch(uiStartLoading())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Attaques);