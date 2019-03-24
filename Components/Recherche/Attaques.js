// Components/Search.js
import React from 'react'
import {View, TextInput, Button, FlatList, StyleSheet, Dimensions, Text, ActivityIndicator} from 'react-native'
import attaques from '../Helpers/Insectes'
import AttaqueItem from './Items/AttaqueItem'
import { Container } from 'native-base';


class Attaques extends React.Component {
    constructor(props) {
        super(props)
        this.culture=this.props.navigation.state.params.culture
            
    }

    render(){
        return (
            <View style={styles.container}>
            <Container>
                <Text style={styles.titre}>
                    Identifier l'attaque
                </Text>
                <FlatList
                    
                    data={attaques}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <AttaqueItem attaque={item}/>}
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
        width: Dimensions.get('window').width-70,
        alignItems:'center',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#2EA073',
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:25
        
    }
  });

export default Attaques

//onPress={() => this.props.navigation.push('Localisation')}