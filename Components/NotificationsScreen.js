import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";

import { Container, Content, Icon, Button } from 'native-base'
import CustomHeader from './CustomHeader'

class NotificationsScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Notification",
        headerLeft: <Icon name="settings" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerIcon: ({ tintColor }) =>(
          <Icon name="settings" style={[styles.icon]}/>
        ),
        

    })

    render() {
        return (

            <Container>
                <Content contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                    <Button
                        full
                        onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={{ color: 'white' }}>Go to Home screen</Text>
                    </Button>
                </Content>
            </Container>
        )
    }

}

export default NotificationsScreen

const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24
    }
})