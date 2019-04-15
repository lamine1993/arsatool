import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Dimensions,
  FlatList,
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
} from '../Store/actions/actionIndex';
import {Spinner } from 'native-base';




class HomeScreen extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidUpdate() {
   
    console.log(this.props.cultures);
    //console.log(this.props.all_attaques);
    

}

  

    _cultureSelected(culture){
      this.props.onSelectCulture(culture, this.props.localisation);
      this.props.navigation.navigate('Attaques');
    } 

    _selectLocalisation= localisation =>{
      this.props.onSelectLocalisation(localisation);
      
    }

    _unselectLocalisation=()=>{
      this.props.onUnselectLocalisation();
    }

    _displayLoading=()=> {
      if (this.props.isLoading) {
        return (
          
          <View>
            <Spinner color='green' />
          </View>
        )
      }
    }

    render() {
      return (
        <View style={styles.container}>
            {this._displayLoading()}    
                <View style={styles.bouton_partie}>
                  <View style={styles.bouton_partie_ligne}>
                   <View style={styles.bouton_partie_ligne_bouton}>
                          <TouchableHighlight 
                            onPress={()=>{this._selectLocalisation("FEUILLES")}}
                            
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
      isLoading: state.ui.isLoading,
      attaques: state.recherche.attaques,
      localisation: state.recherche.localisation,
      all_attaques: state.recherche.all_attaques,
      cultures:state.recherche.cultures
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      onSelectLocalisation: localisation =>  dispatch(selectLocalisation(localisation)),
      onUnselectLocalisation: ()=>dispatch(unselectLocalisation()),
      onSelectCulture : (culture, localisation) =>dispatch(selectCulture(culture, localisation))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
