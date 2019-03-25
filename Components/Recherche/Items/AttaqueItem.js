// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Image, FlatList } from 'react-native'
import {Container,  Header, Content, Card, CardItem, Accordion, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base'
import { FlingGestureHandler } from 'react-native-gesture-handler';

class attaqueItem extends React.Component {
  render() {
      const { attaque, displayFiche } = this.props
    //console.log(this.props)
    //onPress={() => displayLocalisationForCulture(culture.id, culture.nomCulture)}
    const dataArray = [
      { title: "Description", content: ""+attaque.description },
    ];
    return (
        <Content contentContainerStyle={{backgroundColor:'with', alignItems: 'center', padding: 10 }}>
            <Card>
                <CardItem header bordered>
                  <Right> 
                     <Text>Localisation: {attaque.localisation}</Text>
                  </Right>
                  <Left>
                     <Text>Type de Degat: {attaque.typeDegat}</Text>
                   </Left> 
                </CardItem>
                <CardItem cardBody>
                  <Content padder>
                    <Accordion
                      dataArray={dataArray}
                      icon="add"
                      expandedIcon="remove"
                      iconStyle={{ color: "green" }}
                      expandedIconStyle={{ color: "red" }}
                      animation={true}
                       expanded={true}
                    />
                  </Content>
                </CardItem>
                <CardItem>
                  <FlatList
                        style={styles.header_attaque}
                        horizontal={true}
                        data={attaque.imageAttaques}
                        keyExtractor={(item) => item.toString()}
                        renderItem={({item}) => <Image source={item} style={styles.image}/>}
                        onEndReachedThreshold={0.5}
                        onEndReached={() => {
                            console.log("onEndReached")
                          }
                        }
                    />
                </CardItem>
                <CardItem footer bordered>
                  <Right><Text>Date Creation: {attaque.dateValidation}</Text></Right>
                  <Left>
                      <TouchableOpacity 
                        onPress={() => displayFiche(attaque.insecte)}
                        style={styles.fiche}><Text style={{ color: 'blue' }}>Fiche Technique</Text>
                      </TouchableOpacity>
                  </Left> 
                </CardItem>
            </Card>      
      </Content>
    )
  }
}

const styles = StyleSheet.create({
        fiche:{
          borderRadius: 4,
      },
      image:{
        borderColor: '#2EA073',
        borderRadius: 3,
        borderWidth: 1,
        margin:2,
        height:200
      },
      header_attaque:{
        height:210,
        borderWidth:1,
        borderColor: '#2EA073',

      },
      header:{
        flex:1,
        flexDirection: 'row'
      }

  });


export default attaqueItem