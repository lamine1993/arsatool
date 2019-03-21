import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
  Image
} from "react-native";

class DegatType extends Component {

   // onPress={() => this.props.navigation.push('Culture')
   constructor(props) {
    super(props)
    this.idCulture=this.props.navigation.state.params.id
    this.nomCulture=this.props.navigation.state.params.nomCulture
    this.localisation=this.props.navigation.state.params.localisation
  }

   _goToInsecteCausale=(type)=>{
    //idCulture=this.props.navigation.state.params.nomCulture
     this.props.navigation.push('InsecteCausale',{id: this.idCulture,nomCulture:this.nomCulture, localisation: this.localisation, type: type} )
}
 render() {
     return (
           <View style={styles.container}>
                 <View style={styles.titre}>
                    <Text>Type de Degat sur les {this.localisation} des {this.nomCulture}</Text>
                 </View>
                 <TouchableOpacity onPress={() => this._goToInsecteCausale({type:'GALERIES'})}  style={styles.button}>
                   <Text>GALERIES</Text>
                 </TouchableOpacity >
                 <TouchableOpacity onPress={() => this._goToInsecteCausale({type:'TACHES'})}     style={styles.button}>
                   <Text>TACHES</Text>
                 </TouchableOpacity >
                 <TouchableOpacity onPress={() => this._goToInsecteCausale({type:'DEMORMATIONS'})}  style={styles.button}>
                    <Text>DEMORMATIONS</Text>
                 </TouchableOpacity>
                 <TouchableOpacity onPress={() => this._goToInsecteCausale({type:'NECROSES'})}  style={styles.button}>
                    <Text>NECROSES</Text>
                 </TouchableOpacity>
           </View>
     )
 }

}
const styles = StyleSheet.create({
 container: {
   flex:1,
   justifyContent: 'center',
   alignItems:'center',
   paddingHorizontal: 10,
   backgroundColor:'#fff',
 },
 titre:{
     flex:1,
     margin: 10,
     justifyContent: 'center',
     width: Dimensions.get('window').width-70,
     alignItems:'center',
     borderRadius: 4,
     borderWidth: 1,
     borderColor: '#B5E560',
     
 },
 button:{
     flex:2,
     margin: 10,
     paddingHorizontal:10,
     width: Dimensions.get('window').width-50,
     fontSize: 20,
     fontWeight: 'bold', 
     backgroundColor: '#2EA073',
     borderRadius: 4,
     borderWidth: 1,
     borderColor: '#B5E560',
     justifyContent: 'center',
     alignItems:'center'
 }
});


export default DegatType