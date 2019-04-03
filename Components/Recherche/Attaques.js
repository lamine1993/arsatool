// Components/Search.js
import React from 'react'
import {View, TextInput, Icon, Button, FlatList, StyleSheet, Dimensions, Text, ActivityIndicator} from 'react-native'
import attaques from '../Helpers/Insectes'
import AttaqueItem from './Items/AttaqueItem'
import { Container,  Form, Item, Picker, Content, Body, Right, Left } from 'native-base';


class Attaques extends React.Component {
    constructor(props) {
        super(props)
        this.culture=this.props.navigation.state.params.culture
        this.state = {
            type: undefined
        };
    }

    onValueChangeType(value) {
      this.setState({
        type: value
      });
    }

    _displayFiche = (insecte) => {
        
        // this.props.navigation.navigate("FilmDetail",{ idFilm: idFilm })
         this.props.navigation.push('FicheTechnique',{insecte:insecte})
 
     }

    render(){
        return (
            <View style={styles.container}>
            
                    <Form style={{ justifyContent:'flex-start'}}>
                        <Item picker style={{ width:(Dimensions.get('window').width-50)/3 }}>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{  fontSize:7 }}
                                placeholder="Select Type Degat"
                                placeholderStyle={{ color: "#bfc6ea"}}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.type}
                                onValueChange={this.onValueChangeType.bind(this)}
                            >
                            <Picker.Item label="GALERIES" value="key0" />
                            <Picker.Item label="TACHES" value="key1" />
                            <Picker.Item label="DEMORMATIONS" value="key2" />
                            <Picker.Item label="NECROSES" value="key3" />
                        </Picker>
                        </Item>
                    </Form>
                <View style={{width:Dimensions.get('window').width, height:1, backgroundColor:'rgba(0, 0, 0, 0.5)'}}></View>
                <FlatList
                    //style={styles.attaques}
                    data={attaques}
                    keyExtractor={(item) => "attaques"+item.id.toString()}
                    renderItem={({item}) => <AttaqueItem attaque={item} displayFiche={this._displayFiche}/>}
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

export default Attaques

//onPress={() => this.props.navigation.push('Localisation')}