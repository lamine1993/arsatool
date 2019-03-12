import React from 'react'
import {createDrawerNavigator, createAppContainer, DrawerItems, createStackNavigator} from 'react-navigation'
import HomeScreen from '../Components/HomeScreen'
import NotificationsScreen from '../Components/NotificationsScreen'
import {StyleSheet, Image, TouchableOpacity} from 'react-native'
import { Header, Body, Container, Icon } from 'native-base'
import SideBar from "./SideBar.js";
import DebutSearch from '../Components/Recherche/DebutSearch' 
import ChoixCulture from '../Components/Recherche/ChoixCulture'
import Localisation from '../Components/Recherche/Localisation'
import DegatType from '../Components/Recherche/DegatType'
import InsecteCausale from '../Components/Recherche/InsecteCausale'
import FicheTechnique from '../Components/Recherche/FicheTechnique' 


const MyDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: HomeScreen,
    },
    Notifications: {
            screen: NotificationsScreen
    }
  }, {
        drawerWidth: 200,
        initialRouteName: 'Home',
        contentComponent: props => <SideBar {...props} />,
        navigationOptions: ({ navigation }) => ({
          title: navigation.state.routeName,  // Title to appear in status bar
          headerLeft: 
              <TouchableOpacity  onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())} }>
                  <Icon name='menu' style={{ paddingLeft: 10 }} onPress={() => {navigation.openDrawer()}}/>
              </TouchableOpacity>,
          headerStyle: {
              backgroundColor: '#0275d8',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
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

    const CustomDrawerContentComponent = (props) => (
        <Container>
            <content></content>
              <Header style={styles.drawerHeader}>
                <Body>
                    <Image
                    style={styles.drawerImage}
                    source={require('../assets/multi-user-icon.png')} />
                </Body>
            </Header>
            <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
              <DrawerItems {...props} />
            </SafeAreaView>
                   
      </Container>
      );

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
    Debut: {
       screen: DebutSearch,
       navigationOptions: ({ navigation }) => ({
        title: navigation.state.routeName,
        headerStyle: {
          backgroundColor: '#2E40A0',
      },
      }),
     },
    Culture: {
       screen: ChoixCulture,
       navigationOptions: ({ navigation }) => ({
        title: navigation.state.routeName,
        headerStyle: {
          backgroundColor: '#2E40A0',
      },
      }),
       },
    Localisation: {screen: Localisation,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.routeName,
        headerStyle: {
          backgroundColor: '#2E40A0',
      },
      }),
    },
    DegatType: { screen: DegatType,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.routeName,
        headerStyle: {
          backgroundColor: '#2E40A0',
      },
      }),
     },
    InsecteCausale: { screen: InsecteCausale,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.routeName,
        headerStyle: {
          backgroundColor: '#2E40A0',
      },
        
      }),
     },
    FicheTechnique: { screen: FicheTechnique,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.routeName,
        headerStyle: {
          backgroundColor: '#2E40A0',
      },
      }),
     },
    DrawerNavigator: MyDrawerNavigator  
  }, {
    initialRouteName: 'DrawerNavigator',
    cardStyle: { backgroundColor: '#2E40A0' },
  },
  )
  
  //const AppContainer = createAppContainer(MyDrawerNavigator);
  const AppContainer = createAppContainer(Stack);
  export default AppContainer;