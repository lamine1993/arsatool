import React from 'react'
import {createDrawerNavigator, createAppContainer, createStackNavigator} from 'react-navigation'
import HomeScreen from '../Components/HomeScreen'
import {StyleSheet} from 'react-native'
import { Icon } from 'native-base'
import SideBar from "./SideBar.js";
import FicheTechnique from '../Components/Recherche/FicheTechnique'
import LoginScreen from '../Components/Authentification/LoginScreen' 
import FormRegister from '../Components/Authentification/FormRegister'
import Attaques from '../Components/Recherche/Attaques';
import CameraScreen from "../Components/Sending/CameraScreen";
import NavRight from "../Components/UI/NavRight";


const MyDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: HomeScreen,
    },
    Login:{
       screen: LoginScreen
    },
    Signin:{
       screen:FormRegister
    }

  }, {
        //drawerWidth: 300,
        initialRouteName: 'Home',
        contentComponent: props => <SideBar {...props} />,
        navigationOptions: ({ navigation }) => ({

                title: 'AR SA TOOL',  // Title to appear in status bar
                headerLeft:
                        <Icon name='menu' style={{ paddingLeft: 10, color:'#fff' }} onPress={() => {
                          const parent = navigation.dangerouslyGetParent();
                          const isDrawerOpen = parent && parent.state && parent.state.isDrawerOpen;
                          if(isDrawerOpen){
                            navigation.closeDrawer()
                          }
                          else{
                            navigation.openDrawer()
                          }
                        }}
                        />,

               headerRight:  <NavRight navigation={navigation} />,

                /*headerRight:()=>{
                    if(navigation.getParam("user")!==null){
                        return (
                            <Icon
                                name='camera'
                                onPress={() => {navigation.navigate('CameraScreen')}}
                                style={{ paddingRight: 10, color:'#fff' }}
                            />
                        )
                    }
                },*/
                headerStyle: {
                    backgroundColor: '#2EA073',
                    //backgroundColor: '#FFF',
                },
                headerTintColor: '#fff',
                contentOptions: {
                    activeTintColor: '#e91e63',
                    itemsContainerStyle: {
                      marginVertical: 0,
                    },
                    iconContainerStyle: {
                      opacity: 1
                    }
                },
         }),
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',

    });


  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
    container: {
        flex: 1,
    },
    drawerHeader: {
        height: 200,
        backgroundColor: 'white'
    },
    drawerImage: {
        height: 150,
        width: 150,
        borderRadius: 75
    }
  });

  export const Stack = createStackNavigator({
    Attaques: {screen: Attaques,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.routeName,
        headerStyle: {
          backgroundColor: '#2EA073',
          color:'#fff',
      },
      headerTintColor: '#fff',
      }),
    },
    FicheTechnique: { screen: FicheTechnique,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.routeName,
        headerStyle: {
          backgroundColor: '#2EA073',
          color:'#fff',
      },
      headerTintColor: '#fff',
      }),
     },
      CameraScreen:{
              screen: CameraScreen,
             navigationOptions: ({ navigation }) => ({
                  title: "CAPTURE ATTAQUE",
                 header: null,
              }),
          },
    DrawerNavigator: MyDrawerNavigator  
  }, {
    initialRouteName: 'DrawerNavigator',
  },
  )
  const AppContainer = createAppContainer(Stack);
  export default AppContainer;