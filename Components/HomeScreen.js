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
  ActivityIndicator,
  Drawer 
} from "react-native";
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-popup-dialog';
import {Spinner,Container,  Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import { Row, Grid, Col } from 'react-native-easy-grid'
import CustomHeader from './CustomHeader'
import SideBar from "../Navigation/SideBar.js";
import attaques from './Helpers/Insectes'

class HomeScreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
      cultures: [],
      cultureChoisie:"",
      isLoading: false,
      customBackgroundDialog: false 
    }
    this.largeur=Dimensions.get('window').width
  }
   

    static navigationOptions=({navigation})=>({
        drawerLabel: 'Home',
        title: "Home",
        headerLeft: <Icon name='home' style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerIcon: ({ tintColor }) => (
          <Icon name='home' style={[styles.icon, {tintColor: tintColor}]}/>
        ),
        
    })
     
    _cultureSelected(culture){
      this.setState({customBackgroundDialog:false})
      this.props.navigation.navigate('Attaques',{culture:attaques});
    } 
    _displayCultures=(localisation)=>{
      //requete culture.....
       this.setState({isLoading:true})
       this.setState({
         customBackgroundDialog: true,
         isLoading:false
        })
      //this.props.navigation.navigate('Culture');
    }

    _displayLoading() {
      if (this.state.isLoading) {
        return (
          <Dialog
          onTouchOutside={() => {
            this.setState({ isLoading: false });
          }}
         // zIndex={1000}
          width={1}
          height={1}
          backgroundStyle={styles.customBackgroundDialog}
          dialogStyle={{
            backgroundColor: 'transparent',
            justifyContent:'center',
            alignItems: 'center'
          }}
          visible={this.state.isLoading}
        >
          <View>
            <Spinner color='green' />
          </View>
        </Dialog>
        )
      }
    }

    render() {
      return (
        <View style={styles.container}>
                
                <View style={styles.bouton_partie}>
                  <View style={styles.bouton_partie_ligne}>
                   <View style={styles.bouton_partie_ligne_bouton}>
                          <TouchableHighlight 
                            onPress={()=>this._displayCultures("FEUILLE")}
                            
                            >
                              <Image source={require('../assets/menu-image/feuille.png')} style={styles.imageContainer}/>
                                     
                          </TouchableHighlight> 
                    </View>
                        <View style={styles.bouton_partie_ligne_bouton}>
                          <TouchableHighlight
                              onPress={()=>this._displayCultures("FRUIT")}
                          >   
                            <Image source={require('../assets/menu-image/legumes.jpg')} style={styles.imageContainer}/>
                          </TouchableHighlight>
                        </View>
                    </View>
                    <View style={styles.bouton_partie_ligne}>
                      <View style={styles.bouton_partie_ligne_bouton}>
                          <TouchableHighlight 
                            onPress={()=>this._displayCultures("RACINE")}
                          >        
                          <Image source={require('../assets/menu-image/racine.jpg')} style={styles.imageContainer}/>
                                
                          </TouchableHighlight>
                        </View>   
                        <View style={styles.bouton_partie_ligne_bouton}>
                          <TouchableHighlight 
                             onPress={()=>this._displayCultures("TIGE")}
                          >        
                              <Image source={require('../assets/menu-image/tige.jpg')} style={styles.imageContainer}/>
                                  
                          </TouchableHighlight>
                        </View> 
                    </View>
                    <View style={styles.bouton_partie_ligne}>
                      <View style={styles.bouton_partie_ligne_bouton}>
                          <TouchableHighlight 
                            onPress={()=>this._displayCultures("FRUIT")}
                          >        
                          <Image source={require('../assets/menu-image/fruit.png')} style={styles.imageContainer}/>
                                
                          </TouchableHighlight>
                        </View>   
                        <View style={styles.bouton_partie_ligne_bouton}>
                          <TouchableHighlight 
                             onPress={()=>this._displayCultures("FLEUR")}
                          >        
                              <Image source={require('../assets/menu-image/fleur.jpg')} style={styles.imageContainer}/>
                                  
                          </TouchableHighlight> 
                        </View> 
                    </View>
                    <View style={styles.bouton_partie_ligne_pub}>
                    </View>
                  </View>

        <Dialog
          onDismiss={() => {
            this.setState({ customBackgroundDialog: false });
          }}
          onTouchOutside={() => {
            this.setState({ customBackgroundDialog: false });
          }}
          //zIndex={1000}
          width={ Dimensions.get('window').width}
          height={0.9}
          backgroundStyle={styles.customBackgroundDialog}
          dialogStyle={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent:'center',
            alignItems: 'center'
          }}
          dialogTitle={
            <DialogTitle
              title="Culture"
              hasTitleBar={false}
              style={{alignItems:'center', justifyContent:'center', height:60}}
              textStyle={{ color: '#fff'}}
            />
          }
          footer={
            <DialogFooter>
              <DialogButton
                text="CANCEL"
                bordered
                onPress={() => {
                  this.setState({ customBackgroundDialog: false });
                }}
                key="button-1"
              />
              <DialogButton
                text="OK"
                bordered
                onPress={() => {
                  this.setState({ customBackgroundDialog: false });
                }}
                key="button-2"
              />
            </DialogFooter>
          }
          visible={this.state.customBackgroundDialog}
        >
        <DialogContent
           style={styles.dialogContentView}
        >
            <FlatList
              style={styles.header_attaque}
              data={attaques}
              numColumns={2}
              keyExtractor={(item) => item.id.toString()+""}
              renderItem={({item}) => 
               <TouchableHighlight
                  onPress={()=>this._cultureSelected(item.culture)
                  }
               >
                   <Image source={item.culture.imageCulture} style={styles.image_culture}/>
               </TouchableHighlight>
               }
              onEndReachedThreshold={0.5}
              onEndReached={() => {
                  console.log("onEndReached")
                }
              }
            />
         </DialogContent>
        </Dialog>
        {this._displayLoading()}
        
              
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
      marginTop:5
    },
    bouton_partie_ligne_bouton:{

    },
    bouton_partie_ligne_pub:{
      flex: 2,
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
      borderTopWidth:1,
      marginTop:7
    },
    image_culture:{
      //borderColor: '#2EA073',
      borderRadius: 10,
      borderWidth: 1,
      width:Dimensions.get('window').width/2-15,
      height:120,
      margin: 4
    },
    text:{
      fontSize: 15,
      color:'red',
      alignItems:'center',
      justifyContent:'center'
    },
    imageContainer:{
      width:100,
      height:100,
      position:'relative',
      borderRadius: 50
    },
    dialogContentView: {
       flex: 1,
      
      // backgroundColor: '#000',
      // opacity: 0.4,
       alignItems: 'center',
       justifyContent: 'center',
    },
    navigationBar: {
      borderBottomColor: '#b5b5b5',
      borderBottomWidth: 0.5,
      backgroundColor: '#ffffff',
    },
    navigationTitle: {
      padding: 10,
    },
    navigationButton: {
      padding: 10,
    },
    navigationLeftButton: {
      paddingLeft: 20,
      paddingRight: 40,
    },
    navigator: {
      flex: 1,
      // backgroundColor: '#000000',
    },
    customBackgroundDialog: {
      opacity: 1,
      backgroundColor: '#000',
    }
    
  });
export default HomeScreen;