// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Image, FlatList } from 'react-native'
import {Thumbnail } from 'native-base'
import {getImageFromApi} from '../../../API/api'

class attaqueItem extends React.Component {
  

  componentDidMount(){

  }
  render() {
      const { attaque, displayFiche } = this.props
      //console.log(attaque)

      return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.image_insecte}>
                    <Thumbnail large source={{uri: getImageFromApi(attaque.images['0'].imageUrl)}}/>
                    <Text style={{justifyContent:'center', }}>{attaque.insecte.nomInsecte} </Text>
                </View>
                  <View style={styles.type_style}>
                     <Text>Type de Degat: </Text>
                     <Text>{attaque.typeDegat.typeDeg}</Text>
                   </View>
              </View> 
                
              <View style={styles.content}>
                  <FlatList
                        style={styles.header_attaque}
                        horizontal={true}
                        data={attaque.imagesAttaques}
                        keyExtractor={(item) => item.imageUrl.toString()}
                        renderItem={({item}) => <Image source={{uri: getImageFromApi(item.imageUrl)}} style={styles.image_attaque}/>}
                        onEndReachedThreshold={0.5}
                        onEndReached={() => {
                            //console.log("onEndReached")
                          }
                        }
                    />
                </View>
                <View style={styles.footer}>
                    <View>
                        <TouchableOpacity 
                          onPress={() => displayFiche(attaque)}
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

     },
     image_insecte:{
       alignItems:'center',
         flexDirection:'row'
     },
     type_style:{
      alignItems:'flex-start',
         justifyContent:'center'
     },
     header:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
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