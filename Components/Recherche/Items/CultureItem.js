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
            <Card style={{ width: Dimensions.get('window').width-70, alignItems:'center', textAlignVertical:'center'}}>
              <CardItem cardBody>
                <Text style={{fontSize:20, borderBottomWidth:2, borderBottomColor:'black'}}>{culture.nomCulture}</Text>
              </CardItem>
              <CardItem bordered>
                  <Body style={{flex: 1, flexDirection: 'row'}}>
                      <Left>
                          <Button rounded success
                            style={styles.fiche}><Text style={{fontSize:15, color: 'white', alignContent:'center', textAlignVertical:'center' }}>Utile</Text>
                          </Button>
                      </Left>
                      <Right>
                          <Button rounded danger
                          onPress={() => displayLocalisationForCulture(culture)}
                          style={styles.fiche}><Text style={{fontSize:15, color: 'white', alignContent:'center' }}>Ravageur</Text>
                          </Button>
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
          width:(Dimensions.get('window').width-70)/4 + 10
      }
  });


export default CultureItem