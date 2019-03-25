// Components/Search.js
import React from 'react'
import {View, TextInput, Button, FlatList, StyleSheet, Dimensions, Text, ActivityIndicator} from 'react-native'
import lesCultutes from '../Helpers/Culture'
import CultureItem from './Items/CultureItem'
import { Container } from 'native-base';


class ChoixCulture extends React.Component {
    constructor(props) {
        super(props)
        
         
    }
    _displayLocalisationForCulture = (culture) => {
        
       // this.props.navigation.navigate("FilmDetail",{ idFilm: idFilm })
        this.props.navigation.push('Attaques',{culture:culture})

    }

    render(){
        return (
            <View style={styles.container}>
            <Container>
                <Text style={styles.titre}>
                    CHOISIR LA CULTURE 
                </Text>
                <FlatList
                    
                    data={lesCultutes}
                    keyExtractor={(item) => item.nomCulture.toString()}
                    renderItem={({item}) => <CultureItem culture={item} displayLocalisationForCulture={this._displayLocalisationForCulture}/>}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        console.log("onEndReached")
                      }
                    }
                />
            </Container>
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
        margin:10,
        justifyContent: 'center',
        width: Dimensions.get('window').width-50,
        alignItems:'center',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#2EA073',
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:25
        
    }
  });

export default ChoixCulture

//onPress={() => this.props.navigation.push('Localisation')}