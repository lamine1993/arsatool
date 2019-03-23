import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  Drawer 
} from "react-native";
import {Container,  Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base'
import CustomHeader from './CustomHeader'
import SideBar from "../Navigation/SideBar.js";

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
              <Card style={{ width: Dimensions.get('window').width-70}}>
                <CardItem cardBody>
                  <Image source={require('../assets/logo.png')} style={{height:100, width: null, flex: 1}}/>
                </CardItem>
                <CardItem bordered>
                    <Body>
                      <Text style={{justifyContent:'center'}}>
                        Connaitre et maitriser les insectes ravageurs des cultures maraichère
                      </Text>
                    </Body>
                  </CardItem>
              </Card>
              
            <Button
                full
                style={styles.bouton}
                onPress={() => this.props.navigation.navigate('Debut')}>
                <Text style={{ color: 'white' }}>IDENTIFIER ATTAQUE</Text>
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
    bouton: {
      backgroundColor: '#2EA073',
    },
    bg_image: {
      resizeMode: 'stretch',
      justifyContent:'center', 
      alignItems:'center',
    }
  });
export default HomeScreen;