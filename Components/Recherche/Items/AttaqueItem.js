// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Image, FlatList } from 'react-native'
import {Thumbnail } from 'native-base'
import {getImageFromApi} from '../../../API/api'
import HeadingText from '../../UI/HeadingText'
import MainText from '../../UI/MainText'

class AttaqueItem extends React.Component {
  

  componentDidMount(){
     const { attaque, displayFiche } = this.props
  }
  componentDidUpdate(){
      const { attaque, displayFiche } = this.props
      console.log(attaque)
    }
  render() {
      
     // console.log(attaque)

      return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.image_insecte}>
                    <View><Thumbnail large source={{uri: getImageFromApi(this.props.attaque.images['0'].imageUrl)}}/></View>
                   <HeadingText style={{justifyContent:'center', }}> {this.props.attaque.insecte.nomInsecte} </HeadingText>
                </View>
            </View> 
                
            <View style={styles.content}>
                <FlatList
                      style={styles.header_attaque}
                      horizontal={true}
                      data={this.props.attaque.imagesAttaques}
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
                      onPress={() => this.props.displayFiche(this.props.attaque)}
                      style={styles.fiche}>
                          <Text style={{ color: '#fff', fontSize: 15 }}>Comment Combattre ?</Text>
                    </TouchableOpacity>
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


export default AttaqueItem