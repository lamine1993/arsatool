import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";
import { Icon, Button, Container, Header, Content, Left } from 'native-base'
import CustomHeader from './CustomHeader'
class HomeScreen extends React.Component {

    static navigationOptions=({navigation})=>({
        drawerLabel: 'Home',
        title: "Home",
        headerLeft: <Icon name='home' style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerIcon: ({ tintColor }) => (
          <Icon name='home' style={[styles.icon, {tintColor: tintColor}]}/>
        ),
        
    })

    render() {
      return (
        <Container>

        <Content contentContainerStyle={{ flex: 1, alignItems: 'center', /*justifyContent: 'center',*/ padding: 10 }}>
            <Text style={{alignItems: 'center'}}>
              Bienvenue dans l'application AAR SA TOOL
            </Text>
            <Text>
              Connaitre et maitriser les insectes ravageurs des cultures maraichère
            </Text>
            <Button
                full
                onPress={() => this.props.navigation.navigate('Debut')}>
                <Text style={{ color: 'white' }}>Go to Home Notifications</Text>
            </Button>
        </Content>
       
      </Container>
        
      );
    }
  }

  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });
export default HomeScreen;