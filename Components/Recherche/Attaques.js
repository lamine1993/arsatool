// Components/Search.js
import React from 'react'
import {View, TextInput, Icon, Button, FlatList, StyleSheet, Dimensions, Text, ActivityIndicator, ImageBackground} from 'react-native'
import AttaqueItem from './Items/AttaqueItem'
import { selectAttaque, setImagesAttaque } from '../../Store/actions/actionIndex';
import { connect } from 'react-redux'


class Attaques extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){

    }
    

    componentDidUpdate() {

  }

  onValueChangeType(value) {
 
    }

    _displayFiche = (attaque) => {
         this.props.onSelectAttaque(attaque)
        // this.props.navigation.navigate("FilmDetail",{ idFilm: idFilm })
         this.props.navigation.push('FicheTechnique')
 
     }


    render(){
        return (
            <ImageBackground source={require('../../assets/logo.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={styles.container}>
                <View style={{width:Dimensions.get('window').width, height:1, backgroundColor:'rgba(0, 0, 0, 0.5)'}}>
                
                </View>
                <FlatList
                    //style={styles.attaques}
                    data={this.props.all_attaques}
                    keyExtractor={(item,index) => index+"attaques"+item.id.toString()}
                    renderItem={({item}) => <AttaqueItem attaque={item} displayFiche={this._displayFiche}/>}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        console.log("onEndReached")
                      }
                    }
                />
            </View>
            </ImageBackground>
        )
    }
}


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
      culture: state.recherche.culture,
      attaques: state.recherche.attaques,
      all_attaques: state.recherche.all_attaques,
      cultures:state.recherche.cultures,
      imagesAttaques: state.recherche.imagesAttaques,
      customBackgroundDialog: state.recherche.customBackgroundDialog,

  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectAttaque : attaque =>dispatch(selectAttaque(attaque)),
    onsetImagesAttaque: attaques=>dispatch(setImagesAttaque(attaques))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Attaques);