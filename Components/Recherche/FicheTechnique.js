import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
    ImageBackground,
    SafeAreaView, ScrollView
} from "react-native";

import {Container,  Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base'
import { connect } from 'react-redux'
import {getImageFromApi} from '../../API/api'
import HeadingText from '../UI/HeadingText'
import MainText from '../UI/MainText'

class FicheTechnique extends Component {
    constructor(props) {
        super(props)
        
         //console.log("Attaque Choisie " +attaque)
        //this.attaque=this.props.attaque
    }

    componentDidUpdate(){
        //console.log("Attaque Choisie " +this.props.attaque)
    }
    componentDidMount(){
      console.log("Attaque Choisie " +this.props.attaque.images['0'].imageUrl)
        console.log("fiche technique didmount")
    }
   render(){
     return(
      <View  style={styles.container}>
      
        <View style={styles.imageBg}>
          <Image source={{uri: getImageFromApi(this.props.attaque.images[0].imageUrl)}} style={{height:'100%', width: '100%', position:'absolute'}}/>
        </View>
        <ScrollView style={styles.scrollView}>
        <View style={styles.containerView}>
          <View style={styles.methodeLutte} >
            <HeadingText style={{flex:2, textAlignVertical:'center',}}> Methode </HeadingText>
            <MainText style={{flex:1, textAlignVertical:'center', color: '#000'}}> 
              {this.props.attaque.insecte.methode}
            </MainText>
          </View>
          <View style={styles.description}>
            <HeadingText style={{flex:2, textAlignVertical:'center',}}> Description </HeadingText>
            <MainText style={{flex:1, textAlignVertical:'center', color: '#000'}}> 
              {this.props.attaque.insecte.description}
            </MainText>
          </View>
        </View>
      </ScrollView>
      </View>
     )
   }
}


const styles = StyleSheet.create({
      container: {
        flex: 1,
        //marginTop: Constants.statusBarHeight,
      },
      imageBg:{
        height:300,
        width:'100%'
      },
      methodeLutte:{
        flex:1
      },
      description:{
        flex:1,
        

      },
      scrollView: {
        flex:1,
        flexDirection: 'column', 
      },

      containerView:{
         marginHorizontal: 20,
         backgroundColor: '#fff',
         opacity: 1,
      },
      text: {
        fontSize: 42,
      },
})

const mapStateToProps = state => {
  return {
    attaque: state.recherche.attaque
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch: (action) => { dispatch(action) }
  }
}

//export default HomeScreen;
export default connect(mapStateToProps, mapDispatchToProps)(FicheTechnique);