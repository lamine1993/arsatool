import React from "react";
import { AppRegistry, Image, StatusBar, FlatList } from "react-native";
import { Container, Content, Text, List, ListItem, Icon } from "native-base";
const routes = ["Home", "Notifications"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={require('../assets/multi-user-icon.png')}
            style={{
              height: 150,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}/>
            <FlatList
            data={routes}
            renderItem={ ({item}) => {
                return (
                    
                    <ListItem
                        button
                        onPress={() => this.props.navigation.navigate(item)}>
                        <Text>{item}</Text>
                        {console.log(this.props)}
                    </ListItem>
                );
             }
          }
            />
        </Content>
      </Container>
    );
  }
}