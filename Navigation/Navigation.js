import React from 'react'
import {createDrawerNavigator, createAppContainer, createStackNavigator} from 'react-navigation'
import HomeScreen from '../Components/HomeScreen'
import NotificationsScreen from '../Components/NotificationsScreen'
import {StyleSheet} from 'react-native'
import { Icon } from 'native-base'
import SideBar from "./SideBar.js";
import InsecteCausale from '../Components/Recherche/InsecteCausale'
import FicheTechnique from '../Components/Recherche/FicheTechnique' 
import LoginScreen from '../Components/Authentification/LoginScreen' 
import SigninScreen from '../Components/Authentification/SigninScreen' 
import Attaques from '../Components/Recherche/Attaques';


const MyDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: HomeScreen,
    },
    Notifications: {
      screen: NotificationsScreen
    },
    Login:{
       screen: LoginScreen
    },
    Signin:{
       screen:SigninScreen
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
                
              
                headerStyle: {
                    backgroundColor: '#2EA073',
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
    InsecteCausale: { screen: InsecteCausale,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.routeName,
        headerStyle: {
          backgroundColor: '#2EA073',
          color:'#fff',
      },

        
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
    DrawerNavigator: MyDrawerNavigator  
  }, {
    initialRouteName: 'DrawerNavigator',
    cardStyle: { backgroundColor: '#2EA073' },
  },
  )
  
  const CustomDrawerContentComponent = props => (
    <ScrollView>
      <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  );
  //const AppContainer = createAppContainer(MyDrawerNavigator);
  const AppContainer = createAppContainer(Stack);
  export default AppContainer;