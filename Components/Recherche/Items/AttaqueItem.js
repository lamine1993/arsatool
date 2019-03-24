// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Image, FlatList } from 'react-native'
import {Container,  Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base'
import { FlingGestureHandler } from 'react-native-gesture-handler';

class CultureItem extends React.Component {
  render() {
      const { attaque } = this.props
    //console.log(this.props)
    //onPress={() => displayLocalisationForCulture(culture.id, culture.nomCulture)}
    return (
        <Content contentContainerStyle={{backgroundColor:'with', alignItems: 'center',height: 200, padding: 10 }}>
            <FlatList
                    horizontal={true}
                    data={attaque.imageAttaques}
                    keyExtractor={(item) => item}
                    renderItem={({item}) => <Image source={item} style={{margin:10,height:200}}/>}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        console.log("onEndReached")
                      }
                    }
                />
      </Content>
    )
  }
}

const styles = StyleSheet.create({
        fiche:{
          borderRadius: 4,
          width:(Dimensions.get('window').width-70)/4 + 10
      }
  });


export default CultureItem