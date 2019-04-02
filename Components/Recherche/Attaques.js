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
            localisation: undefined,
            type: undefined
        };
    }
    onValueChangeLocalisation(value) {
        this.setState({
            localisation: value
        });
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
            <Container>
                    <Form style={{flexDirection:'row', justifyContent:'center'}}>
                      <Right>
                        <Item picker style={{ width:(Dimensions.get('window').width-50)/2-10 }}>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width:undefined,  fontSize:12 }}
                                placeholder="Select Lacalisation"
                                placeholderStyle={{ color: "#bfc6ea"}}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.localisation}
                                onValueChange={this.onValueChangeLocalisation.bind(this)}
                            >
                            <Picker.Item label="FRUITS" value="key0" />
                            <Picker.Item label="FLEURS" value="key1" />
                            <Picker.Item label="FEUILLES" value="key2" />
                            <Picker.Item label="TIGES" value="key3" />
                        </Picker>
                        </Item>
                     </Right>
                     <Left>
                        <Item picker style={{ width:(Dimensions.get('window').width-50)/2-10 }}>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width:undefined,  fontSize:12 }}
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
                        </Left>
                    </Form>
                
                <FlatList
                    
                    data={attaques}
                    keyExtractor={(item) => "attaques"+item.id.toString()}
                    renderItem={({item}) => <AttaqueItem attaque={item} displayFiche={this._displayFiche}/>}
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
        borderWidth: 1,
        borderColor: '#2EA073',
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:25
        
    }
  });

export default Attaques

//onPress={() => this.props.navigation.push('Localisation')}