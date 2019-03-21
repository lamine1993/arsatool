// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native'


class CultureItem extends React.Component {
  render() {
      const { insecte, displayLocalisationForCulture } = this.props
    //console.log(this.props)
    return (
       <TouchableOpacity onPress={() => displayLocalisationForCulture(insecte.id)}  style={styles.button}>
         <View style={styles.content_container}>
           <Image source={require(insecte.insecteImage)} style={{height:100, width: null, flex: 1}} />
           <Text style={{flex:2}}>{insecte.nomInsecte}</Text>
         </View>
       </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    button:{
        margin: 10,
        
        paddingHorizontal:10,
        width: Dimensions.get('window').width-50,
        fontSize: 20,
        fontWeight: 'bold',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#2EA073',
        justifyContent: 'center',
        alignItems:'center'
    },
    content_container:{
        flex:1,
    }
  });


export default CultureItem