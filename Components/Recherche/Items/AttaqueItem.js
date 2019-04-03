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
        <View style={styles.container}>
            <View style={styles.header}>
                  <View style={styles.image_insecte}> 
                     <Thumbnail large source={attaque.insecte.insecteImage}/>
                     <Text style={{justifyContent:'center', }}>{attaque.insecte.nomInsecte} </Text>
                  </View>
                  <View style={styles.type_style}>
                     <Text>Type de Degat: </Text>
                     <Text>{attaque.typeDegat}</Text>
                   </View>
              </View> 
                
              <View style={styles.content}>
                  <FlatList
                        style={styles.header_attaque}
                        horizontal={true}
                        data={attaque.imageAttaques}
                        keyExtractor={(item) => item.toString()}
                        renderItem={({item}) => <Image source={item} style={styles.image_attaque}/>}
                        onEndReachedThreshold={0.5}
                        onEndReached={() => {
                            console.log("onEndReached")
                          }
                        }
                    />
                </View>
                <View style={styles.footer}>
                    <View style={{alignItems: 'flex-start'}}>
                       <Text>Date Creation: </Text>
                       <Text>{attaque.dateValidation}</Text>
                    </View>
                    <View>
                        <TouchableOpacity 
                          onPress={() => displayFiche(attaque.insecte)}
                          style={styles.fiche}><Text style={{ color: 'blue', }}>Fiche Technique</Text>
                        </TouchableOpacity>
                    </View> 
                </View>
        </View>      
    )
  }
}

const styles = StyleSheet.create({
     container:{
       flex:1,
       flexDirection: 'column',
       marginBottom: 20,
       //marginStart:3,
       borderBottomWidth:0.5,
       borderBottomColor:'rgba(0, 0, 0, 0.5)',
       padding:5

     },
     image_insecte:{
       flexDirection:'row',
       alignItems:'center'
     },
     type_style:{
      alignItems:'flex-start'
     },
     header:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
     },
     image_insecte:{
        flexDirection:'row'
      },
      type_style:{
          justifyContent:'center'
      },
     content:{
        flex:2,
     },
     header_attaque:{
        marginTop: 4,
        marginBottom: 4
     },
     footer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
     },
     image_attaque:{
       width:150,
       height: 150,
       borderRadius: 10,
       margin: 5,
     }

  });


export default attaqueItem