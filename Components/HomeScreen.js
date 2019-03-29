import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  Dimensions,
  FlatList,
  ImageBackground,
  Drawer 
} from "react-native";
import {Container,  Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import { Row, Grid, Col } from 'react-native-easy-grid'
import CustomHeader from './CustomHeader'
import SideBar from "../Navigation/SideBar.js";
import attaques from './Helpers/Insectes'

class HomeScreen extends React.Component {

    static navigationOptions=({navigation})=>({
        drawerLabel: 'Home',
        title: "Home",
        headerLeft: <Icon name='home' style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerIcon: ({ tintColor }) => (
          <Icon name='home' style={[styles.icon, {tintColor: tintColor}]}/>
        ),
        
    })

    displayCultures=(localisation)=>{
      this.props.navigation.navigate('Culture');
    }

    render() {
      return (
        <View style={styles.container}>
                <View style={styles.bouton_partie}>
                  <View style={styles.bouton_partie_ligne}>
                   <View style={styles.bouton_partie_ligne_bouton}>
                          <TouchableHighlight onPress={()=>this.displayCultures("FEUILLE")}>
                              <ImageBackground source={require('../assets/menu-image/feuille.png')} style={styles.imageContainer}>
                                <View style={styles.bouton_partie_ligne_bouton_title}>
                                  
                                </View>
                              </ImageBackground>        
                          </TouchableHighlight> 
                          <Text style={styles.text}>FEUILLE</Text>
                    </View>
                        <View style={styles.bouton_partie_ligne_bouton}>
                          <TouchableHighlight onPress={()=>this.displayCultures("FRUIT")}>   
                            <ImageBackground source={require('../assets/menu-image/legumes.jpg')} style={styles.imageContainer}>
                                  <View style={styles.bouton_partie_ligne_bouton_title}>
                                    
                                  </View>
                              </ImageBackground>
                          </TouchableHighlight>
                          <Text style={styles.text}>LEGUME/FRUIT</Text>
                        </View>
                    </View>
                    <View style={styles.bouton_partie_ligne}>
                      <View style={styles.bouton_partie_ligne_bouton}>
                          <TouchableHighlight onPress={()=>this.displayCultures("RACINE")}>        
                          <ImageBackground source={require('../assets/menu-image/racine.jpg')} style={styles.imageContainer}>
                                <View style={styles.bouton_partie_ligne_bouton_title}>
                                  
                                </View>
                            </ImageBackground>
                          </TouchableHighlight> 
                          <Text style={styles.text}>RACINE</Text>
                        </View>   
                        <View style={styles.bouton_partie_ligne_bouton}>
                          <TouchableHighlight  onPress={()=>this.displayCultures("TIGE")}>        
                              <ImageBackground source={require('../assets/menu-image/tige.jpg')} style={styles.imageContainer}>
                                  <View style={styles.bouton_partie_ligne_bouton_title}></View>
                              </ImageBackground>
                          </TouchableHighlight> 
                          <Text style={styles.text}>TIGE</Text>
                        </View> 
                    </View>
                  </View>
                  <View>
                  <FlatList
                        style={styles.header_attaque}
                        horizontal={true}
                        data={attaques}
                        keyExtractor={(item) => item.description.toString()}
                        renderItem={({item}) => <Image source={item.culture.imageCulture} style={styles.image_culture}/>}
                        onEndReachedThreshold={0.5}
                        onEndReached={() => {
                            console.log("onEndReached")
                          }
                        }
                    />
                  </View>
               
      </View>
        
      );
    }
  }

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      backgroundColor:'#fff'
    },
    bouton_partie:{
      flex: 2,
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
    priview_culture:{
      flex: 1,
      flexDirection: 'row',
    },
    bouton_partie_ligne:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    bouton_partie_ligne_bouton:{

    },
    bouton_partie_ligne_bouton_title:{
      position: 'absolute',
       top: 0, 
       left: 0, 
       right: 0, 
       bottom: 0, 
       alignItems: 'center'
      },
    icon: {
      width: 24,
      height: 24,
    },
    header_attaque:{
      borderTopColor: '#2EA073',
      borderTopWidth:1
    },
    image_culture:{
      borderColor: '#2EA073',
      borderRadius: 30,
      borderWidth: 1,
      width:200,
      height:200,
      margin:2
    },
    text:{
      fontSize: 15,
      fontWeight: 'bold',
      color:'red',
      alignItems:'center',
      justifyContent:'center'
    },
    imageContainer:{
      width:100,
      height:100,
      borderRadius: 50
    }
    
  });
export default HomeScreen;