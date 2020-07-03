import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux'

class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    console.log("session "+this.props.navigation)
    //sthis.props.navigation.navigate(this.props.session ? 'App' : 'Auth');
    this._bootstrapAsync;
  }

  _bootstrapAsync=()=>{
    console.log("session "+this.props.session)
    this.props.navigation.navigate(this.props.session ? 'App' : 'Auth');
  };

  componentDidMount(){
  }

componentDidUpdate(){
    this._bootstrapAsync;
  };
  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const mapStateToProps = state => {
  return {
    session: state.connexion.session,
    user: state.connexion.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);