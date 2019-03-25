// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native'
import {Container,  Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base'
import { FlingGestureHandler } from 'react-native-gesture-handler';

class CultureItem extends React.Component {
  render() {
      const { culture, displayLocalisationForCulture } = this.props
    //console.log(this.props)
    //onPress={() => displayLocalisationForCulture(culture.id, culture.nomCulture)}
    return (
        <Content contentContainerStyle={{backgroundColor:'with', alignItems: 'center', /*justifyContent: 'center',*/ padding: 10 }}>
            <Card style={{ heigth:400, width: Dimensions.get('window').width-50, alignItems:'center', textAlignVertical:'center'}}>
              <CardItem cardBody>
                <Text style={{width: Dimensions.get('window').width-50,textAlign:'center',textAlignVertical:'center', alignItems:'center', fontSize:20, borderBottomWidth:1, borderBottomColor:'black'}}>{culture.nomCulture}</Text>
              </CardItem>
              <CardItem bordered>
                  <Body style={{flex: 1, flexDirection: 'row'}}>
                      <Left>
                          <TouchableOpacity
                            style={styles.fiche}><Text style={{color:'green'}}>Insecte Utile</Text>
                          </TouchableOpacity>
                      </Left>
                      <Right>
                          <TouchableOpacity
                          onPress={() => displayLocalisationForCulture(culture)}
                          style={styles.fiche}><Text style={{color:'red'}}>Attaques</Text>
                          </TouchableOpacity>
                      </Right>    
                  </Body>
                </CardItem>
            </Card>
      </Content>
    )
  }
}

const styles = StyleSheet.create({
        fiche:{
          borderRadius: 4,
         // width:(Dimensions.get('window').width-70)/4 + 10,
          alignItems:'center',
          textAlign:'center',
         alignContent:'center'
      }
  });


export default CultureItem