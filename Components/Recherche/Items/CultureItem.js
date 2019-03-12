// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native'


class CultureItem extends React.Component {
  render() {
      const { culture, displayLocalisationForCulture } = this.props
    //console.log(this.props)
    return (
       <TouchableOpacity onPress={() => displayLocalisationForCulture(culture.id, culture.nomCulture)}  style={styles.button}>
         <View style={styles.content_container}>
           <Text style={styles.title_text}>{culture.nomCulture}</Text>
         </View>
       </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    button:{
        flex:2,
        height: 100,
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


export default CultureItem