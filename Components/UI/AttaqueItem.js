import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Image, FlatList } from 'react-native'
import {Thumbnail } from 'native-base'
import {getImageFromApi} from '../../API/api'
import HeadingText from './HeadingText'
import MainText from './MainText'

const attaqueItem = props => (
   <View {...props} style={styles.container}>
            <View style={styles.header}>
                <View style={styles.image_insecte}>
                    <View><Thumbnail large source={{uri: getImageFromApi(props.attaque.images['0'].imageUrl)}}/></View>
                   <HeadingText style={{justifyContent:'center', }}> {props.attaque.insecte.nomInsecte} </HeadingText>
                </View>
            </View> 
                
            <View style={styles.content}>
                <FlatList
                      style={styles.header_attaque}
                      horizontal={true}
                      data={props.attaque.imagesAttaques}
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
                    <TouchableOpacity 
                      onPress={() => props.displayFiche(props.attaque)}
                      style={styles.fiche}>
                          <Text style={{ color: '#fff', fontSize: 15 }}>Comment Combattre ?</Text>
                    </TouchableOpacity>
            </View>
                
        </View>     
);

const styles = StyleSheet.create({
     container:{
           flex:1,
           flexDirection: 'column',
           marginBottom: 20,
           //marginStart:3,
           borderBottomWidth:0.5,
           borderBottomColor:'rgba(0, 0, 0, 0.5)',
           width: '100%',
           paddingBottom: 10,
           
           alignContent:'center'

     },
     fiche:{
       //backgroundColor:'#7DB240'
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
          backgroundColor:'#7DB240',
          //width: '40%',
          height: 45,
          borderRadius:25,
          alignSelf: 'flex-start',
          paddingHorizontal: 5,
          justifyContent:'center'
     },
     image_attaque:{
           width:200,
           height: 250,
           borderRadius: 15,
           margin: 5,
           /*shadowColor: '#000',
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.2,
            elevation: 2,
            */
     }

  });

  export default attaqueItem