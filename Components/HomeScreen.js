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
import { connect } from 'react-redux'
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
} from 'react-native-popup-dialog';
import {
  selectCulture,  
  selectLocalisation, 
  unselectLocalisation
} from '../Store/actions/actionRechercheIndex';
import {Spinner,Container,  Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';


class HomeScreen extends React.Component {
  constructor(props){
    super(props)
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
      this.props.onSelectCulture(culture);
      this.props.navigation.navigate('Attaques');
    } 

    _selectLocalisation= localisation =>{
      console.log("dialog: "+this.props.customBackgroundDialog);
      this.props.onSelectLocalisation(localisation);
      console.log("dialog: "+this.props.customBackgroundDialog);
    }

    _unselectLocalisation=()=>{
      console.log("dialog localisation: "+this.props.customBackgroundDialog);
      this.props.onUnselectLocalisation();
      console.log("dialog localisation: "+this.props.customBackgroundDialog);
    }

    _displayLoading() {
      if (this.props.isLoading) {
        return (
          <Dialog
          onTouchOutside={() => {
            this.props.isLoading=true
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
          visible={this.props.isLoading}
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
                            onPress={()=>{this._selectLocalisation("FEUILLE")}}
                            
                            >
                              <Image source={require('../assets/menu-image/feuille.png')} style={styles.imageContainer}/>
                                     
                          </TouchableHighlight> 
                    </View>
                        <View style={styles.bouton_partie_ligne_bouton}>
                          <TouchableHighlight
                              onPress={()=>this._selectLocalisation("FRUIT")}
                          >   
                            <Image source={require('../assets/menu-image/legumes.jpg')} style={styles.imageContainer}/>
                          </TouchableHighlight>
                        </View>
                    </View>
                    <View style={styles.bouton_partie_ligne}>
                      <View style={styles.bouton_partie_ligne_bouton}>
                          <TouchableHighlight 
                            onPress={()=>this._selectLocalisation("RACINE")}
                          >        
                          <Image source={require('../assets/menu-image/racine.jpg')} style={styles.imageContainer}/>
                                
                          </TouchableHighlight>
                        </View>   
                        <View style={styles.bouton_partie_ligne_bouton}>
                          <TouchableHighlight 
                             onPress={()=>this._selectLocalisation("TIGE")}
                          >        
                              <Image source={require('../assets/menu-image/tige.jpg')} style={styles.imageContainer}/>
                                  
                          </TouchableHighlight>
                        </View> 
                    </View>
                    <View style={styles.bouton_partie_ligne}>
                      <View style={styles.bouton_partie_ligne_bouton}>
                          <TouchableHighlight 
                            onPress={()=>this._selectLocalisation("FRUIT")}
                          >        
                          <Image source={require('../assets/menu-image/fruit.png')} style={styles.imageContainer}/>
                                
                          </TouchableHighlight>
                        </View>   
                        <View style={styles.bouton_partie_ligne_bouton}>
                          <TouchableHighlight 
                             onPress={()=>this._selectLocalisation("FLEUR")}
                          >        
                              <Image source={require('../assets/menu-image/fleur.jpg')} style={styles.imageContainer}/>
                                  
                          </TouchableHighlight> 
                        </View> 
                    </View>
                    <View style={styles.bouton_partie_ligne_pub}>
                    </View>
                  </View>

        <Dialog
          onDismiss={()=>{this._unselectLocalisation()}}
          onTouchOutside={()=>{this._unselectLocalisation()}}
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
                  this._unselectLocalisation()
                }}
              />
            </DialogFooter>
          }
          visible={this.props.customBackgroundDialog}
        >
        <DialogContent
           style={styles.dialogContentView}
        >
            <FlatList
              style={styles.header_attaque}
              data={this.props.attaques}
              numColumns={2}
              keyExtractor={(item, index) => index+"homme"+item.id.toString()+""}
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
      width:125,
      height:125,
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

  const mapStateToProps = state => {
    //console.log(state);
    return {
      customBackgroundDialog: state.recherche.customBackgroundDialog,
      isLoading: state.recherche.isLoading,
      attaques: state.recherche.attaques
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      onSelectLocalisation: localisation =>  dispatch(selectLocalisation(localisation)),
      onUnselectLocalisation: ()=>dispatch(unselectLocalisation()),
      onSelectCulture : culture =>dispatch(selectCulture(culture))
    }
  }

//export default HomeScreen;
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
