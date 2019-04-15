import React from 'react'
import Navigation from './Navigation/Navigation'
import { Provider } from 'react-redux'
import configureStore from './Store/configurationStore'
import SplashScreen from 'react-native-splash-screen'
import {getculture, registration} from './API/api'

const store = configureStore();
export default class App extends React.Component {
  componentDidMount() {
      SplashScreen.hide();
      //getculture();
      //registration();
  }

  render() {
    return (
      <Provider store={store}>
         <Navigation/>
      </Provider>
    );
  }
};

