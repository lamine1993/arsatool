import React from 'react'
import {createDrawerNavigator, createAppContainer, createStackNavigator,createSwitchNavigator, NavigationActions} from 'react-navigation'
import HomeScreen from '../Components/HomeScreen'
import ListeCulture from '../Components/ListeCulture'
import {StyleSheet} from 'react-native'
import { Icon } from 'native-base'
import SideBar from "./SideBar.js";
import FicheTechnique from '../Components/Recherche/FicheTechnique'
import LoginScreen from '../Components/Authentification/LoginScreen'
import SingninScreen from '../Components/Authentification/SigninScreen'  
import FormRegister from '../Components/Authentification/FormRegister'
import Attaques from '../Components/Recherche/Attaques';
import CameraScreen from "../Components/Sending/CameraScreen";
import NavRight from "../Components/UI/NavRight";
import AuthLoadingScreen from "../Components/AuthLoadingScreen";
import SigninScreen from '../Components/Authentification/SigninScreen'



const MyDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: HomeScreen,
    }

  }, {
        //drawerWidth: 300,
        initialRouteName: 'Home',
        contentComponent: props => <SideBar {...props} />,
        navigationOptions: ({ navigation }) => ({

                //title: 'AR SA TOOL',  // Title to appear in status bar
                headerLeft:
                        <Icon name='menu' color= '#FFF' style={{ paddingLeft: 10 }} onPress={() => {
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
                headerStyle: {
                   // backgroundColor: '#2EA073',
                    backgroundColor: 'transparent',
                },
                headerTintColor: '#fff',
                headerTransparent: true,
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

 const RegisterStack = createStackNavigator({
    Signin: {
          screen: SigninScreen,
          navigationOptions: ({ navigation }) => ({
              //title: navigation.state.routeName,
              headerStyle: {
                backgroundColor: 'transparent',
                color:'#fff',
            },
            //headerTintColor: '#fff',
            headerTransparent: true,
            }),
        }

     
  });

  const AuthStack = createStackNavigator({
     Login: {
       screen: LoginScreen,
       navigationOptions: ({ navigation }) => ({
          //title: navigation.state.routeName,
          headerStyle: {
            backgroundColor: 'transparent',
            color:'#fff',
        },
        //headerTintColor: '#fff',
        headerTransparent: true,
        }),
     }
  });

  export const AppStack = createStackNavigator({
    Attaques: {screen: Attaques,
      navigationOptions: ({ navigation }) => ({
        //title: navigation.state.routeName,
        headerStyle: {
          backgroundColor: 'transparent',
          color:'#fff',
      },
      //headerTintColor: '#fff',
      headerTransparent: true,
      }),
    },
    ListeCulture: {screen: ListeCulture,
      navigationOptions: ({ navigation }) => ({
       // title: navigation.state.routeName,
        headerStyle: {
          backgroundColor: 'transparent',
          color:'#fff',
      },
      headerTransparent: true,
      //headerTintColor: '#fff',
      }),
    },
    FicheTechnique: { screen: FicheTechnique,
      navigationOptions: ({ navigation }) => ({
        //title: navigation.state.routeName,
        headerStyle: {
          backgroundColor: 'transparent',
          color:'#fff',
      },
      headerTransparent: true,
      //headerTintColor: '#fff',
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
  const AppSwitch = createSwitchNavigator(
        {
        App: AppStack,
        Auth: AuthStack,
        Register:RegisterStack
        
      },
      {
        initialRouteName: 'App',
      }
  );
 const AppContainer = createAppContainer(AppSwitch)
  export default AppContainer;