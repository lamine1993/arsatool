// Components/Search.js
import React from 'react'
import {View, TextInput, Button, FlatList, StyleSheet, Dimensions, Text, ActivityIndicator} from 'react-native'
import lesCultutes from '../Helpers/Culture'
import CultureItem from './Items/CultureItem'


class ChoixCulture extends React.Component {
    constructor(props) {
        super(props)
        
         
    }
    _displayLocalisationForCulture = (idCulture, nomCulture) => {
        
       // this.props.navigation.navigate("FilmDetail",{ idFilm: idFilm })
        this.props.navigation.push('Localisation',{idCulture:idCulture, nomCulture:nomCulture})

    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.titre}>
                    CULTURE
                </Text>
                <FlatList
                    
                    data={lesCultutes}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <CultureItem culture={item} displayLocalisationForCulture={this._displayLocalisationForCulture}/>}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        console.log("onEndReached")
                      }
                    }
                />
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
        
    }
  });

export default ChoixCulture

//onPress={() => this.props.navigation.push('Localisation')}