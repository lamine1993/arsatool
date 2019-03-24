// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Image, FlatList } from 'react-native'
import {Container,  Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base'
import { FlingGestureHandler } from 'react-native-gesture-handler';

class attaqueItem extends React.Component {
  render() {
      const { attaque, displayFiche } = this.props
    //console.log(this.props)
    //onPress={() => displayLocalisationForCulture(culture.id, culture.nomCulture)}
    return (
        <Content contentContainerStyle={{backgroundColor:'with', alignItems: 'center', padding: 10 }}>
            
            <FlatList
                    style={{height: 200}}
                    horizontal={true}
                    data={attaque.imageAttaques}
                    keyExtractor={(item) => item.toString()}
                    renderItem={({item}) => <Image source={item} style={{margin:10,height:200}}/>}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        console.log("onEndReached")
                      }
                    }
                />
                <Button 
                 onPress={() => displayFiche(attaque.insecte)}
                 style={styles.fiche}><Text style={{ color: 'white' }}>Fiche Technique</Text>
                 </Button>
                      
              
              
      </Content>
    )
  }
}

const styles = StyleSheet.create({
        fiche:{
          borderRadius: 4,
          width: 100
          
      }
  });


export default attaqueItem