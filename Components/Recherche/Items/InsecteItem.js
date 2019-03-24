// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Image } from 'react-native'
import {Container,  Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base'


class InsecteItem extends React.Component {
  render() {
      const { insecte, displayInsectes } = this.props
      this.image='../../../assets/'+insecte.insecteImage
      //this.path=require(this.path)
    //console.log(this.props)
    return (
            <Content contentContainerStyle={{backgroundColor:'with', alignItems: 'center', /*justifyContent: 'center',*/ padding: 10 }}>
              <Card style={{ width: Dimensions.get('window').width-70}}>
                <CardItem cardBody>
                  <Image source={insecte.insecteImage} style={{height:150, width: null, flex: 1}}/>
                </CardItem>
                <CardItem bordered>
                    <Body style={{flex: 1, flexDirection: 'row'}}>
                     <Left>
                        <Text>
                        {insecte.nomInsecte}
                        </Text>
                     </Left>
                      
                      <Right>
                          <Button 
                          onPress={() => displayInsectes(insecte)}
                           style={styles.fiche}><Text style={{ color: 'white' }}>Fiche Technique</Text></Button>
                      </Right>
                    </Body>
                  </CardItem>
              </Card>
        </Content>
    )
  }
}

const styles = StyleSheet.create({
    button:{
        height:200,
        paddingHorizontal:10,
        width: Dimensions.get('window').width-50,
        fontSize: 20,
        fontWeight: 'bold',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#2EA073',
        justifyContent: 'center',
        alignItems:'center'
    },
    content_container:{
      
    },
    fiche:{
        borderRadius: 4,
        borderWidth: 1,
        backgroundColor: '#2EA073',
        borderColor: '#2EA073',
    }
  });


export default InsecteItem