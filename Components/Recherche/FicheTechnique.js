import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions
} from "react-native";

import {Container,  Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base'
import CustomHeader from '../CustomHeader'

class FicheTechnique extends Component {
    constructor(props) {
        super(props)
        this.insecte=this.props.navigation.state.params.insecte         
    }
    render() {
        return (

            <Container>
                <Content contentContainerStyle={{ flex: 1, padding: 10 }}>
                <Card>
                <CardItem cardBody>
                   <Text style={{ color: '#00F', alignItems: 'center' }}>
                   {this.insecte.nomInsecte}
                   </Text>
                </CardItem>
                <CardItem cardBody>
                  <Image source={require('../../assets/Puceron.png')} style={{height:200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem cardBody>
                    <Text style={{ color: '#F00' }}>
                    Description
                    </Text>
                </CardItem>
                <CardItem cardBody>
                    <Text>
                      {this.insecte.description}
                    </Text>
                </CardItem>
                     
                <CardItem cardBody>
                   <Text style={{ color: '#00F' }}>
                      Methode de Lutte
                   </Text>
                </CardItem>
                <CardItem cardBody>
                    <Text>
                      {this.insecte.methode}
                    </Text>
                </CardItem>
              </Card>
                </Content>
            </Container>
        )
    }

}

export default FicheTechnique

const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24
    }
})